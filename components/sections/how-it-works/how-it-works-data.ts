import type { StaticImageData } from 'next/image'
import calendarIcon from '@/public/Icons/homepage icons/calendar.png'
import clipboardIcon from '@/public/Icons/homepage icons/clipboard.png'
import rocketIcon from '@/public/Icons/homepage icons/rocket.png'
import smileyIcon from '@/public/Icons/homepage icons/smileypng.png'

export interface Step {
  icon: StaticImageData
  label: string
  title: string
  description: string
}

export const howItWorksSteps: Step[] = [
  {
    icon: clipboardIcon,
    label: 'Setup',
    title: "Tell us what's going on",
    description:
      'A short 3-minute questionnaire helps us understand your concerns, preferences, and availability. No diagnosis required.',
  },
  {
    icon: rocketIcon,
    label: 'Profile',
    title: 'Get matched instantly',
    description:
      'Our algorithm scores every BACP-accredited therapist on your profile. You see your top 3 matches with compatibility percentages.',
  },
  {
    icon: calendarIcon,
    label: 'Strategy',
    title: 'Book in seconds',
    description:
      'Pick a slot that fits around lectures. Evening and weekend availability from every therapist. Same-week booking guaranteed.',
  },
  {
    icon: smileyIcon,
    label: 'Progress',
    title: 'Start feeling better',
    description:
      'Sessions via secure video call or phone. Track your mood and progress in your personal dashboard between sessions.',
  },
]
