export interface Step {
  label: string
  title: string
  description: string
}

export const howItWorksSteps: Step[] = [
  {
    label: 'Setup',
    title: "Tell us what's going on",
    description:
      'A short 3-minute questionnaire helps us understand your concerns, preferences, and availability. No diagnosis required.',
  },
  {
    label: 'Profile',
    title: 'Get matched instantly',
    description:
      'Our algorithm scores every BACP-accredited therapist on your profile. You see your top 3 matches with compatibility percentages.',
  },
  {
    label: 'Strategy',
    title: 'Book in seconds',
    description:
      'Pick a slot that fits around lectures. Evening and weekend availability from every therapist. Same-week booking guaranteed.',
  },
  {
    label: 'Progress',
    title: 'Start feeling better',
    description:
      'Sessions via secure video call or phone. Track your mood and progress in your personal dashboard between sessions.',
  },
]
