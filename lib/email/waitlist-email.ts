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
}

export async function sendWaitlistEmail({ userType, name, email }: SendWaitlistEmailParams) {
  const apiKey = process.env.BREVO_API_KEY
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Luma Health'

  if (!apiKey) {
    console.warn('Skipping waitlist email: missing BREVO_API_KEY')
    return
  }

  const template = await loadWaitlistTemplate(userType)

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
          email,
          name,
        },
      ],
      subject: WAITLIST_EMAIL_CONFIG[userType].subject,
      htmlContent: template.html,
      textContent: template.text,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    throw new Error(`Brevo send failed: ${response.status} ${errorBody}`)
  }
}

async function loadWaitlistTemplate(userType: WaitlistUserType) {
  const templateDir = WAITLIST_EMAIL_CONFIG[userType].templateDir
  const basePath = path.join(process.cwd(), 'public', 'email', templateDir)
  const [html, text] = await Promise.all([
    readFile(path.join(basePath, 'email.html'), 'utf8'),
    readFile(path.join(basePath, 'email.txt'), 'utf8'),
  ])

  return {
    html: prepareHtmlTemplate(html, templateDir),
    text: prepareTextTemplate(text),
  }
}

function prepareHtmlTemplate(html: string, templateDir: string) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, '')

  return html
    .replace(/intrest/g, 'interest')
    .replace(/{{\s*(view_in_browser|update_preferences|unsubscribe)\s*}}/g, siteUrl)
    .replace(/(src|href)="images\/([^"]+)"/g, `$1="${siteUrl}/email/${templateDir}/images/$2"`)
}

function prepareTextTemplate(text: string) {
  return text.replace(/intrest/g, 'interest')
}
