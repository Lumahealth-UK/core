export interface Founder {
  name: string
  role: string
  bio: string
}

export const founders: Founder[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Former NHS clinical psychologist. Spent 10 years watching referral systems fail patients. Founded Luma to fix that.',
  },
  {
    name: 'Marcus Webb',
    role: 'CTO & Co-founder',
    bio: 'Built healthcare platforms at two scale-ups before Luma. Passionate about tech that genuinely helps people.',
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Clinical Lead',
    bio: 'BACP senior accredited therapist and clinical supervisor. Leads therapist vetting and quality standards at Luma.',
  },
]
