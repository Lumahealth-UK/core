import { BookOpen, Brain, Heart, Home, Sparkles, Users } from 'lucide-react'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const situations = [
  {
    title: 'Exam pressure',
    description: 'When deadlines, revision, and performance anxiety start taking over your week.',
    Icon: BookOpen,
    tone: 'coral',
  },
  {
    title: 'Anxiety or low mood',
    description: 'When you want support before things become impossible to manage alone.',
    Icon: Brain,
    tone: 'sage',
  },
  {
    title: 'Feeling isolated',
    description: 'When university looks social from the outside, but feels lonely in real life.',
    Icon: Users,
    tone: 'coral',
  },
  {
    title: 'Relationships and identity',
    description: 'When friendships, family, dating, culture, or identity feel hard to untangle.',
    Icon: Heart,
    tone: 'sage',
  },
  {
    title: 'Moving away from home',
    description: 'When independence is exciting, but also heavy, confusing, or unfamiliar.',
    Icon: Home,
    tone: 'coral',
  },
  {
    title: 'Burnout',
    description:
      'When you are still functioning, but everything is taking more effort than it should.',
    Icon: Sparkles,
    tone: 'sage',
  },
] as const

const toneClasses = {
  coral: {
    icon: 'bg-luma-coral-tint text-luma-coral-deep',
    wash: 'bg-luma-coral/8',
    line: 'bg-luma-coral',
  },
  sage: {
    icon: 'bg-luma-sage-soft text-luma-sage-deep',
    wash: 'bg-luma-sage/10',
    line: 'bg-luma-sage',
  },
} satisfies Record<(typeof situations)[number]['tone'], { icon: string; wash: string; line: string }>

export function WhoItsForSection() {
  return (
    <WaveSection
      id={SECTION_IDS.WHO_ITS_FOR}
      className="relative overflow-hidden bg-beige"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <div className="absolute left-[-12rem] top-24 h-72 w-72 rounded-full bg-luma-coral/10 blur-3xl" />
      <div className="absolute bottom-20 right-[-10rem] h-80 w-80 rounded-full bg-luma-sage/12 blur-3xl" />

      <SectionHeader
        eyebrow="Who it is for"
        title={
          <>
            Support for the parts of student life that{' '}
            <span className="text-luma-coral">do not fit on a timetable.</span>
          </>
        }
        description="You do not need a crisis, a diagnosis, or the perfect words for what is wrong. If something is making student life harder to carry, Luma is being built for that moment."
        centered
      />

      <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {situations.map(({ title, description, Icon, tone }) => (
          <article
            key={title}
            className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-luma-hairline bg-white p-6 shadow-[0_12px_32px_rgba(61,47,30,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-luma-mocha/10 hover:shadow-[0_18px_46px_rgba(61,47,30,0.08)]"
          >
            <div
              className={cn(
                'absolute inset-x-0 top-0 h-1 opacity-80 transition-opacity duration-200 group-hover:opacity-100',
                toneClasses[tone].line
              )}
            />
            <div
              className={cn(
                'absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl',
                toneClasses[tone].wash
              )}
            />
            <div className="relative">
              <div
                className={cn(
                  'mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl',
                  toneClasses[tone].icon
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold leading-tight text-luma-mocha">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-luma-mocha/70">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </WaveSection>
  )
}
