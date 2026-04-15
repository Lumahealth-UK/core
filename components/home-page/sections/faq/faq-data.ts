export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'How quickly can I see a therapist?',
    answer:
      'Most users are matched and booked within 5 business days. Same-week appointments are available on our paid plans.',
  },
  {
    question: 'Are Luma therapists properly qualified?',
    answer:
      'Yes. Every therapist is BACP or UKCP accredited, has an enhanced DBS check, holds valid insurance, and is in regular clinical supervision.',
  },
  {
    question: 'Can I switch therapists?',
    answer:
      'Absolutely. If your match doesn\'t feel right after the first session, we\'ll re-match you at no extra cost.',
  },
  {
    question: 'Is my data confidential?',
    answer:
      'Yes. Sessions are end-to-end encrypted. We never share personal data with universities or employers. See our privacy policy for full details.',
  },
  {
    question: 'Does my university need to be partnered with Luma?',
    answer:
      'No — anyone can sign up for a self-pay plan. University partnerships unlock subsidised rates and faster matching.',
  },
]
