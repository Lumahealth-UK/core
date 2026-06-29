import { NextResponse } from 'next/server'
import { sendReferralRewardEmail, sendWaitlistEmail } from '@/lib/email/waitlist-email'
import { generateLumaCode } from '@/lib/promo-code'
import { createAdminClient } from '@/lib/supabase/admin'
import { buildRequestUrl } from '@/lib/utils'
import {
  ACCREDITATION_BODY_VALUES,
  HOW_HEARD_VALUES,
  UK_UNIVERSITIES,
  WAITLIST_USER_TYPES,
  type WaitlistUserType,
} from '@/lib/constants'

interface WaitlistPayload {
  userType?: unknown
  name?: unknown
  email?: unknown
  university?: unknown
  accreditationBody?: unknown
  howHeard?: unknown
  termsAccepted?: unknown
  referralCode?: unknown
}

interface WaitlistRow {
  user_type: WaitlistUserType
  name: string
  email: string
  university: string | null
  professional_email: string | null
  accreditation_body: string | null
  how_heard: string
  referral_code: string | null
}

interface InsertedWaitlistRow extends WaitlistRow {
  id: string
}

interface ReferrerRow {
  id: string
  name: string
  email: string
  referral_code: string
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isOneOf<T extends readonly string[]>(value: string, options: T): value is T[number] {
  return (options as readonly string[]).includes(value)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let payload: WaitlistPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const userType = asTrimmedString(payload.userType)
  const name = asTrimmedString(payload.name)
  const email = asTrimmedString(payload.email).toLowerCase()
  const university = asTrimmedString(payload.university)
  const accreditationBody = asTrimmedString(payload.accreditationBody)
  const howHeard = asTrimmedString(payload.howHeard)
  const termsAccepted = payload.termsAccepted === true
  const submittedReferralCode = asTrimmedString(payload.referralCode).toUpperCase()

  if (!isOneOf(userType, WAITLIST_USER_TYPES)) {
    return NextResponse.json({ error: 'Please choose student or therapist.' }, { status: 400 })
  }

  if (!termsAccepted) {
    return NextResponse.json(
      { error: 'Please accept the terms and privacy policy.' },
      { status: 400 }
    )
  }

  if (!name || !isValidEmail(email) || !isOneOf(howHeard, HOW_HEARD_VALUES)) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
  }

  const row:
    | {
        data: WaitlistRow
      }
    | {
        error: string
      } =
    userType === 'student'
      ? buildStudentRow({ userType, name, email, university, howHeard })
      : buildTherapistRow({ userType, name, email, accreditationBody, howHeard })

  if ('error' in row) {
    return NextResponse.json({ error: row.error }, { status: 400 })
  }

  const supabase = createAdminClient()
  const isStudent = userType === 'student'
  const referralCode = isStudent ? generateLumaCode() : null
  let referrer: ReferrerRow | null = null

  const { data: existingWaitlistRow, error: existingWaitlistError } = await supabase
    .from('waitlist')
    .select('id')
    .eq('email', email)
    .maybeSingle<{ id: string }>()

  if (existingWaitlistError) {
    console.error('Waitlist duplicate lookup failed', {
      code: existingWaitlistError.code,
      message: existingWaitlistError.message,
      details: existingWaitlistError.details,
      hint: existingWaitlistError.hint,
    })

    return NextResponse.json(
      { error: 'We could not check the waitlist yet. Please try again.' },
      { status: 500 }
    )
  }

  if (existingWaitlistRow) {
    return NextResponse.json({ error: 'This email is already on the waitlist.' }, { status: 409 })
  }

  if (submittedReferralCode && isStudent) {
    const { data, error } = await supabase
      .from('waitlist')
      .select('id, name, email, referral_code')
      .eq('referral_code', submittedReferralCode)
      .eq('user_type', 'student')
      .maybeSingle<ReferrerRow>()

    if (error) {
      console.error('Referral lookup failed', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      })

      return NextResponse.json(
        { error: 'We could not validate that referral link yet. Please try again.' },
        { status: 500 }
      )
    }

    if (!data) {
      return NextResponse.json({ error: 'That referral link is not valid.' }, { status: 400 })
    }

    if (data.email.toLowerCase() === email) {
      return NextResponse.json({ error: 'You cannot refer yourself.' }, { status: 400 })
    }

    referrer = data
  }

  const insertData = {
    ...row.data,
    referral_code: referralCode,
  }

  const { data: insertedWaitlist, error } = await supabase
    .from('waitlist')
    .insert(insertData)
    .select(
      'id, user_type, name, email, university, professional_email, accreditation_body, how_heard, referral_code'
    )
    .single<InsertedWaitlistRow>()

  if (error) {
    console.error('Waitlist insert failed', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })

    const duplicate = error.code === '23505' || error.message.toLowerCase().includes('duplicate')

    return NextResponse.json(
      {
        error: duplicate
          ? 'This email is already on the waitlist.'
          : 'We could not add you to the waitlist yet. Please try again.',
      },
      { status: duplicate ? 409 : 500 }
    )
  }

  const referralLink = referralCode
    ? buildRequestUrl(request, '/waitlist', { ref: referralCode })
    : undefined
  let signupPromoCode: string | undefined

  if (referrer && insertedWaitlist.referral_code) {
    const referrerPromoCode = generateLumaCode()
    signupPromoCode = generateLumaCode()

    const { error: referralInsertError } = await supabase.from('waitlist_referrals').insert({
      referrer_waitlist_id: referrer.id,
      referred_waitlist_id: insertedWaitlist.id,
    })

    if (referralInsertError) {
      console.error('Waitlist referral insert failed', {
        code: referralInsertError.code,
        message: referralInsertError.message,
        details: referralInsertError.details,
        hint: referralInsertError.hint,
      })
    } else {
      const { error: promoInsertError } = await supabase.from('promo_codes').insert([
        {
          waitlist_id: referrer.id,
          code: referrerPromoCode,
          source: 'referral_reward',
          discount_type: 'fixed_amount',
          discount_value: 5,
        },
        {
          waitlist_id: insertedWaitlist.id,
          code: signupPromoCode,
          source: 'referred_signup',
          discount_type: 'fixed_amount',
          discount_value: 5,
        },
      ])

      if (promoInsertError) {
        console.error('Promo code insert failed', {
          code: promoInsertError.code,
          message: promoInsertError.message,
          details: promoInsertError.details,
          hint: promoInsertError.hint,
        })
        signupPromoCode = undefined
      } else {
        try {
          await sendReferralRewardEmail({
            name: referrer.name,
            email: referrer.email,
            promoCode: referrerPromoCode,
          })
        } catch (emailError) {
          console.error('Referral reward email failed', {
            waitlistId: referrer.id,
            promoCode: referrerPromoCode,
            error: emailError,
          })
        }
      }
    }
  }

  try {
    await sendWaitlistEmail({
      userType,
      name,
      email,
      referralLink,
      referralCode: referralCode ?? undefined,
      promoCode: signupPromoCode,
    })
  } catch (emailError) {
    console.error('Waitlist email failed', {
      waitlistId: insertedWaitlist.id,
      referralCode,
      promoCode: signupPromoCode,
      error: emailError,
    })
  }

  return NextResponse.json({ ok: true })
}

function buildStudentRow({
  userType,
  name,
  email,
  university,
  howHeard,
}: {
  userType: WaitlistUserType
  name: string
  email: string
  university: string
  howHeard: string
}) {
  if (!isOneOf(university, UK_UNIVERSITIES)) {
    return { error: 'Please choose your university.' }
  }

  return {
    data: {
      user_type: userType,
      name,
      email,
      university,
      professional_email: null,
      accreditation_body: null,
      how_heard: howHeard,
      referral_code: null,
    },
  }
}

function buildTherapistRow({
  userType,
  name,
  email,
  accreditationBody,
  howHeard,
}: {
  userType: WaitlistUserType
  name: string
  email: string
  accreditationBody: string
  howHeard: string
}) {
  if (!isOneOf(accreditationBody, ACCREDITATION_BODY_VALUES)) {
    return { error: 'Please choose your accreditation body.' }
  }

  return {
    data: {
      user_type: userType,
      name,
      email,
      university: null,
      professional_email: email,
      accreditation_body: accreditationBody,
      how_heard: howHeard,
      referral_code: null,
    },
  }
}
