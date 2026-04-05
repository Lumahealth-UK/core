export type BillingMode = 'session' | 'monthly'

export interface Plan {
  id: string
  eyebrow: string
  name: string
  tagline: string
  price: Record<BillingMode, string>
  priceNote: Record<BillingMode, string>
  features: string[]
  cta: string
  popular?: true
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    eyebrow: 'Starter',
    name: 'Pay as you go',
    tagline: 'No commitment. Try a session first.',
    price: { session: '£25', monthly: '£25' },
    priceNote: { session: 'per session', monthly: 'per session · no lock-in' },
    features: [
      '50-min video session',
      'BACP-accredited therapist',
      'Same-week booking',
      'Session notes & summary',
    ],
    cta: 'Get started',
  },
  {
    id: 'pro',
    eyebrow: 'Student Pro',
    name: 'Student Pro',
    tagline: 'Consistent support for real progress.',
    price: { session: '£25', monthly: '£79' },
    priceNote: { session: 'per session', monthly: 'per month · 4 sessions' },
    features: [
      '4 sessions per month',
      'Choose your therapist',
      'Progress & mood dashboard',
      'Between-session messaging',
      'Pause or cancel anytime',
    ],
    cta: 'Join waitlist \u2014 free \u2192',
    popular: true,
  },
  {
    id: 'university',
    eyebrow: 'Institutions',
    name: 'University',
    tagline: 'Affordable access for your entire student body.',
    price: { session: 'Custom', monthly: 'Custom' },
    priceNote: { session: 'per institution', monthly: 'per institution' },
    features: [
      'Unlimited student seats',
      'Admin wellbeing dashboard',
      'GDPR-compliant reporting',
      'Dedicated account manager',
    ],
    cta: 'Contact us \u2192',
  },
]
