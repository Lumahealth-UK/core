export interface Testimonial {
  quote: string
  name: string
  initials: string
  subject: string
  university: string
  year: string
  avatarColor: string
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I want support that does not make me wait until everything has fallen apart. By the time I ask for help, I usually need someone soon, not in six weeks.',
    name: 'Student voice',
    initials: 'SV',
    subject: 'Waiting lists',
    university: 'UK university',
    year: 'Year 3',
    avatarColor: '#f47b66',
    featured: true,
  },
  {
    quote:
      'I would feel more confident starting therapy if I knew the person understood student pressure, deadlines, money stress, and being away from home.',
    name: 'Student voice',
    initials: 'SV',
    subject: 'Anxiety',
    university: 'UK university',
    year: 'Year 2',
    avatarColor: '#8baf8b',
  },
  {
    quote:
      'I do not need an app to fix everything. I need a clear first step, privacy, and a way to find someone who feels like the right fit.',
    name: 'Student voice',
    initials: 'SV',
    subject: 'Privacy',
    university: 'UK university',
    year: 'Year 1',
    avatarColor: '#f9a08f',
  },
  {
    quote:
      'The hardest part is explaining what is wrong when I am already overwhelmed. I want Luma to make that first conversation feel less intimidating.',
    name: 'Student voice',
    initials: 'SV',
    subject: 'Burnout',
    university: 'UK university',
    year: 'Year 2',
    avatarColor: '#6a9a6a',
  },
]
