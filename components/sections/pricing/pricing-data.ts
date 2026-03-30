export interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export const plans: Plan[] = [
  {
    name: 'Self-pay',
    price: '£55/session',
    description: 'Pay as you go — no commitment required.',
    features: ['Vetted therapist matching', 'Online & in-person', 'Secure messaging', 'Session notes'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Monthly',
    price: '£45/session',
    description: '4 sessions per month, billed monthly.',
    features: ['Everything in Self-pay', 'Priority matching', 'Progress tracking', 'Cancel any time'],
    cta: 'Most popular',
    highlighted: true,
  },
  {
    name: 'University',
    price: 'Custom',
    description: 'Subsidised plans for student unions and universities.',
    features: ['Bulk session credits', 'Dedicated account manager', 'Usage reporting', 'SLA guarantee'],
    cta: 'Talk to us',
    highlighted: false,
  },
]
