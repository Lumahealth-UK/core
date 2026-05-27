import { CalendarCheck, FileText, MessageCircle, RefreshCw, SlidersHorizontal, Video } from 'lucide-react'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'

const features = [
  {
    title: 'A thoughtful match',
    description: 'Share what you want help with, your preferences, and when you are available.',
    Icon: SlidersHorizontal,
  },
  {
    title: 'Therapist profiles',
    description: 'See the experience, approach, and focus areas behind each recommended therapist.',
    Icon: FileText,
  },
  {
    title: 'Student-friendly booking',
    description: 'Choose sessions around lectures, work, placements, and exam season.',
    Icon: CalendarCheck,
  },
  {
    title: 'Online sessions',
    description: 'Meet from your room, library booth, or wherever you can speak privately.',
    Icon: Video,
  },
  {
    title: 'Support between sessions',
    description: 'Keep track of reflections, reminders, and next steps without losing the thread.',
    Icon: MessageCircle,
  },
  {
    title: 'Room to rematch',
    description: 'If the fit is not right, the product is designed to help you change therapist.',
    Icon: RefreshCw,
  },
] as const

export function WhatYouGetSection() {
  return (
    <WaveSection
      id={SECTION_IDS.WHAT_YOU_GET}
      className="bg-beige"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <SectionHeader
        eyebrow="What you will get"
        title={
          <>
            Therapy access that feels built around{' '}
            <span className="text-luma-coral">student reality.</span>
          </>
        }
        description="Luma is not just a booking page. It is a calmer path from needing help to actually sitting with someone who understands student life."
        centered
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-luma-hairline bg-white p-6 shadow-[0_10px_28px_rgba(61,47,30,0.04)]"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-luma-coral-tint text-luma-coral-deep">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-bold leading-tight text-luma-mocha">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-luma-mocha/70">{description}</p>
          </article>
        ))}
      </div>
    </WaveSection>
  )
}
