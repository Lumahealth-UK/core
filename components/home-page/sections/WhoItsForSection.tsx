import { BookOpen, Brain, Heart, Home, Sparkles, Users } from 'lucide-react'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'

const situations = [
  {
    title: 'Exam pressure',
    description: 'When deadlines, revision, and performance anxiety start taking over your week.',
    Icon: BookOpen,
  },
  {
    title: 'Anxiety or low mood',
    description: 'When you want support before things become impossible to manage alone.',
    Icon: Brain,
  },
  {
    title: 'Feeling isolated',
    description: 'When university looks social from the outside, but feels lonely in real life.',
    Icon: Users,
  },
  {
    title: 'Relationships and identity',
    description: 'When friendships, family, dating, culture, or identity feel hard to untangle.',
    Icon: Heart,
  },
  {
    title: 'Moving away from home',
    description: 'When independence is exciting, but also heavy, confusing, or unfamiliar.',
    Icon: Home,
  },
  {
    title: 'Burnout',
    description: 'When you are still functioning, but everything is taking more effort than it should.',
    Icon: Sparkles,
  },
] as const

export function WhoItsForSection() {
  return (
    <WaveSection
      id={SECTION_IDS.WHO_ITS_FOR}
      className="bg-luma-espresso text-white"
      topWave={{ front: 'var(--color-beige)', back: 'var(--color-luma-mocha)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
    >
      <SectionHeader
        eyebrow="Who it is for"
        title={
          <>
            Support for the parts of student life that{' '}
            <span className="text-luma-coral-light">do not fit on a timetable.</span>
          </>
        }
        description="You do not need a crisis, a diagnosis, or the perfect words for what is wrong. If something is making student life harder to carry, Luma is being built for that moment."
        centered
        className="[&_h2]:text-white [&_p]:text-white/60 [&>span]:bg-white/10 [&>span]:text-luma-coral-light"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {situations.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-luma-mocha p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-luma-coral-light">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-bold leading-tight text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
          </article>
        ))}
      </div>
    </WaveSection>
  )
}
