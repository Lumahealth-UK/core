export interface Testimonial {
  quote: string
  name: string
  initials: string
  subject: string
  university: string
  year: string
  rating: number
  avatarColor: string
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd been on my university's counselling waiting list for 6 weeks when I found Luma. I had my first session 2 days later. My therapist actually understood exam anxiety — she'd worked with students for 8 years. By session 4, I was functioning again. I genuinely don't know where I'd be without it.",
    name: 'Amara K.',
    initials: 'AK',
    subject: 'Psychology',
    university: "King's College London",
    year: 'Year 3',
    rating: 5,
    avatarColor: '#f47b66',
    featured: true,
  },
  {
    quote:
      "The matching system is genuinely impressive. I got someone who specialised in exactly what I was dealing with — and the sessions were affordable enough that I didn't have to choose between therapy and food.",
    name: 'James M.',
    initials: 'JM',
    subject: 'Engineering',
    university: 'Manchester',
    year: 'Year 2',
    rating: 5,
    avatarColor: '#8baf8b',
  },
  {
    quote:
      'I was sceptical that an online therapist could really help. After 3 sessions, my anxiety scores dropped by half. The progress tracking made it visible — that kept me going.',
    name: 'Riya P.',
    initials: 'RP',
    subject: 'Law',
    university: 'UCL',
    year: 'Year 1',
    rating: 5,
    avatarColor: '#f9a08f',
  },
  {
    quote:
      "The mood dashboard between sessions was something I didn't expect to love. It made me more self-aware. I started noticing patterns I'd never have noticed before.",
    name: 'Tom L.',
    initials: 'TL',
    subject: 'History',
    university: 'Edinburgh',
    year: 'Year 2',
    rating: 4,
    avatarColor: '#6a9a6a',
  },
]
