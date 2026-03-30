export interface Testimonial {
  quote: string
  name: string
  university: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I waited eight months on the NHS. With Luma I was speaking to a therapist within five days. That difference is enormous when you\'re struggling.',
    name: 'Amara O.',
    university: 'University of Manchester',
  },
  {
    quote:
      'The matching questionnaire actually works — my therapist was exactly the right fit. I\'ve tried therapy twice before and it never clicked like this.',
    name: 'James T.',
    university: 'UCL',
  },
  {
    quote:
      'Affordable, private, and no shame attached. Luma made it feel totally normal to ask for help.',
    name: 'Priya S.',
    university: 'King\'s College London',
  },
]
