import { readFile } from 'node:fs/promises'
import path from 'node:path'
import {
  BREVO_SEND_EMAIL_URL,
  DEFAULT_SITE_URL,
  HELLO_EMAIL,
  WAITLIST_EMAIL_CONFIG,
  type WaitlistUserType,
} from '@/lib/constants'

interface SendWaitlistEmailParams {
  userType: WaitlistUserType
  name: string
  email: string
  referralLink?: string
  referralCode?: string
  promoCode?: string
}

interface SendReferralRewardEmailParams {
  name: string
  email: string
  promoCode: string
}

export async function sendWaitlistEmail({
  userType,
  name,
  email,
  referralLink,
  referralCode,
  promoCode,
}: SendWaitlistEmailParams) {
  const apiKey = process.env.BREVO_API_KEY
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Luma Health'

  if (!apiKey) {
    console.warn('Skipping waitlist email: missing BREVO_API_KEY')
    return
  }

  const template = await loadWaitlistTemplate(userType, {
    referralLink,
    referralCode,
    promoCode,
  })

  await sendBrevoEmail({
    apiKey,
    senderName,
    to: { email, name },
    subject: WAITLIST_EMAIL_CONFIG[userType].subject,
    htmlContent: template.html,
    textContent: template.text,
  })
}

export async function sendReferralRewardEmail({
  name,
  email,
  promoCode,
}: SendReferralRewardEmailParams) {
  const apiKey = process.env.BREVO_API_KEY
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Luma Health'

  if (!apiKey) {
    console.warn('Skipping referral reward email: missing BREVO_API_KEY')
    return
  }

  const escapedName = escapeHtml(name)
  const escapedPromoCode = escapeHtml(promoCode)

  await sendBrevoEmail({
    apiKey,
    senderName,
    to: { email, name },
    subject: 'You earned a Luma promo code',
    htmlContent: `<!doctype html><html><body style="margin:0;background:#f0f1f5;font-family:Arial,Helvetica,sans-serif;color:#3d2f1e"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f1f5;padding:32px 16px"><tr><td align="center"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden"><tr><td style="padding:32px"><h1 style="margin:0 0 16px;font-size:28px;line-height:1.2;color:#3d2f1e">You earned a promo code</h1><p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hi ${escapedName},</p><p style="margin:0 0 20px;font-size:16px;line-height:1.6">Someone joined the Luma waitlist through your referral link. Here is £5 off your first session:</p><p style="margin:0 0 24px;padding:16px 20px;border-radius:14px;background:#fff6f1;color:#c45a41;font-size:24px;font-weight:700;letter-spacing:0.08em;text-align:center">${escapedPromoCode}</p><p style="margin:0;font-size:14px;line-height:1.6;color:#6f6255">We will remind you about this code when bookings open.</p></td></tr></table></td></tr></table></body></html>`,
    textContent: `Hi ${name},\n\nSomeone joined the Luma waitlist through your referral link. Here is £5 off your first session:\n\n${promoCode}\n\nWe will remind you about this code when bookings open.`,
  })
}

async function sendBrevoEmail({
  apiKey,
  senderName,
  to,
  subject,
  htmlContent,
  textContent,
}: {
  apiKey: string
  senderName: string
  to: {
    email: string
    name: string
  }
  subject: string
  htmlContent: string
  textContent: string
}) {
  const response = await fetch(BREVO_SEND_EMAIL_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: HELLO_EMAIL,
      },
      to: [
        {
          email: to.email,
          name: to.name,
        },
      ],
      subject,
      htmlContent,
      textContent,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    throw new Error(`Brevo send failed: ${response.status} ${errorBody}`)
  }
}

async function loadWaitlistTemplate(
  userType: WaitlistUserType,
  variables: {
    referralLink?: string
    referralCode?: string
    promoCode?: string
  }
) {
  const templateDir = WAITLIST_EMAIL_CONFIG[userType].templateDir
  const basePath = path.join(process.cwd(), 'public', 'email', templateDir)
  const [html, text] = await Promise.all([
    readFile(path.join(basePath, 'email.html'), 'utf8'),
    readFile(path.join(basePath, 'email.txt'), 'utf8'),
  ])

  return {
    html: prepareHtmlTemplate(html, templateDir, variables),
    text: prepareTextTemplate(text, variables),
  }
}

function prepareHtmlTemplate(
  html: string,
  templateDir: string,
  variables: {
    referralLink?: string
    referralCode?: string
    promoCode?: string
  }
) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, '')
  const referralLink = variables.referralLink ?? siteUrl
  const referralCode = variables.referralCode ?? ''
  const promoCode = variables.promoCode ?? ''

  return html
    .replace(/intrest/g, 'interest')
    .replace(/{{\s*(view_in_browser|update_preferences|unsubscribe)\s*}}/g, siteUrl)
    .replace(/{{\s*referral_link\s*}}/g, referralLink)
    .replace(/{{\s*referral_code\s*}}/g, referralCode)
    .replace(/{{\s*promo_code\s*}}/g, promoCode)
    .replace(/{{\s*promo_code_block\s*}}/g, promoCode ? buildPromoCodeTableRow(promoCode) : '')
    .replace(/(src|href)="images\/([^"]+)"/g, `$1="${siteUrl}/email/${templateDir}/images/$2"`)
}

function prepareTextTemplate(
  text: string,
  variables: {
    referralLink?: string
    referralCode?: string
    promoCode?: string
  }
) {
  return text
    .replace(/intrest/g, 'interest')
    .replace(/Get Referral Link/g, buildReferralText(variables))
    .replace(/{{\s*referral_link\s*}}/g, variables.referralLink ?? '')
    .replace(/{{\s*referral_code\s*}}/g, variables.referralCode ?? '')
    .replace(/{{\s*promo_code\s*}}/g, variables.promoCode ?? '')
    .replace(
      /{{\s*promo_code_block\s*}}/g,
      variables.promoCode ? buildPromoCodeText(variables.promoCode) : ''
    )
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })
}

function buildPromoCodeTableRow(promoCode: string) {
  const escapedPromoCode = escapeHtml(promoCode)

  return `<tr><td style="padding:0px 24px 20px"><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-spacing:0;border-collapse:separate"><tbody><tr><td style="border-radius:18px;background-color:#fff6f1;border:1px solid #f47b6633;padding:20px;text-align:center"><p style="margin:0 0 10px;font-family:Helvetica,Arial,sans-serif;font-size:18px;font-weight:700;line-height:1.35;color:#3d2f1e">You came through a friend's Luma link.</p><p style="margin:0 0 16px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:#6f6255">So here is £5 off your first session. Tiny win, useful timing.</p><p style="margin:0 auto;padding:14px 18px;border-radius:14px;background-color:#ffffff;color:#c45a41;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;letter-spacing:0.08em;line-height:1.2;text-align:center">${escapedPromoCode}</p></td></tr></tbody></table></td></tr>`
}

function buildPromoCodeText(promoCode: string) {
  return `You came through a friend's Luma link, so here is £5 off your first session. Tiny win, useful timing.\n\n${promoCode}\n`
}

function buildReferralText({
  referralLink,
  referralCode,
}: {
  referralLink?: string
  referralCode?: string
}) {
  if (referralCode) {
    return ['If the link gets lost, they can enter this code:', referralCode].join('\n')
  }

  return referralLink ? 'Use the referral button in this email.' : 'Get Referral Link'
}
