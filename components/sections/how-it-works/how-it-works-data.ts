export interface Step {
  icon: string
  label: string
  title: string
  description: string
  accentRgb: string
}

export const howItWorksSteps: Step[] = [
  {
    icon: '🎯',
    label: 'Setup',
    title: "Tell us what's going on",
    description:
      'A short 3-minute questionnaire helps us understand your concerns, preferences, and availability. No diagnosis required.',
    accentRgb: '197 184 232',
  },
  {
    icon: '✨',
    label: 'Profile',
    title: 'Get matched instantly',
    description:
      'Our algorithm scores every BACP-accredited therapist on your profile. You see your top 3 matches with compatibility percentages.',
    accentRgb: '139 175 139',
  },
  {
    icon: '📅',
    label: 'Strategy',
    title: 'Book in seconds',
    description:
      'Pick a slot that fits around lectures. Evening and weekend availability from every therapist. Same-week booking guaranteed.',
    accentRgb: '245 216 75',
  },
  {
    icon: '🌿',
    label: 'Progress',
    title: 'Start feeling better',
    description:
      'Sessions via secure video call or phone. Track your mood and progress in your personal dashboard between sessions.',
    accentRgb: '168 200 232',
  },
]
