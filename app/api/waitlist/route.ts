import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  ACCREDITATION_BODY_VALUES,
  HOW_HEARD_VALUES,
  UK_UNIVERSITIES,
  WAITLIST_USER_TYPES,
  type WaitlistUserType,
} from '@/lib/waitlist-options'

interface WaitlistPayload {
  userType?: unknown
  name?: unknown
  email?: unknown
  university?: unknown
  accreditationBody?: unknown
  howHeard?: unknown
  termsAccepted?: unknown
}

interface WaitlistRow {
  user_type: WaitlistUserType
  name: string
  email: string
  university: string | null
  professional_email: string | null
  accreditation_body: string | null
  how_heard: string
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

  const supabase = await createClient()
  const { error } = await supabase.from('waitlist').insert(row.data)

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
    },
  }
}
