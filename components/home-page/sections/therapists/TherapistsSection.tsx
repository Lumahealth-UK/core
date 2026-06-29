import Image from 'next/image'
import { ArrowRight, CalendarDays, PoundSterling, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { TRUST_SIGNALS } from './therapists-data'

const statCards: {
  metric: string
  label: string
  icon: LucideIcon
  className: string
  animationClassName: string
}[] = [
  {
    ...TRUST_SIGNALS[0],
    icon: ShieldCheck,
    className: 'left-3 top-4 sm:left-8 sm:top-8 lg:-left-8 lg:top-12',
    animationClassName: 'animate-float-vertical [animation-duration:4.8s]',
  },
  {
    ...TRUST_SIGNALS[1],
    icon: PoundSterling,
    className: 'bottom-8 right-3 sm:bottom-10 sm:right-8 lg:-right-8 lg:bottom-28',
    animationClassName: 'animate-float-vertical [animation-delay:900ms] [animation-duration:5.4s]',
  },
  {
    ...TRUST_SIGNALS[2],
    icon: CalendarDays,
    className: 'bottom-3 left-5 sm:bottom-8 sm:left-10 lg:left-16 lg:-bottom-6',
    animationClassName: 'animate-float-vertical [animation-delay:1600ms] [animation-duration:5.8s]',
  },
]

function TherapistStatCard({
  metric,
  label,
  icon: Icon,
  className,
  animationClassName,
}: (typeof statCards)[number]) {
  return (
    <div
      className={cn(
        'absolute z-10 w-[168px] rounded-2xl border border-luma-hairline bg-white/90 p-4 shadow-popup backdrop-blur-xl sm:w-[190px]',
        animationClassName,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-luma-sage-soft text-luma-sage-deep">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-heading text-2xl font-bold leading-none text-luma-mocha">
            {metric}
          </span>
          <span className="mt-1.5 block text-xs font-medium leading-5 text-luma-mocha/55">
            {label}
          </span>
        </span>
      </div>
    </div>
  )
}

export function TherapistsSection() {
  return (
    <Section
      id={SECTION_IDS.THERAPISTS}
      className="overflow-hidden bg-white"
      containerClassName="max-w-screen-xl w-full"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-lg space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-luma-coral">
            Our therapists
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
            Every therapist <span className="italic text-luma-coral">vetted,</span> accredited,
            student-aware.
          </h2>
          <p className="text-base leading-relaxed text-luma-mocha/65">
            All Luma therapists are BACP or UKCP accredited with specific experience working with
            students. No one gets listed without passing our vetting process.
          </p>
          <div className="pt-2">
            <a
              href="/therapists"
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-7 py-3.5',
                'bg-luma-coral text-sm font-semibold text-white',
                'transition-colors duration-200 hover:bg-luma-coral-deep'
              )}
            >
              Find your therapist <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl px-4 pb-12 pt-6 sm:px-10 lg:px-8">
          <div className="absolute inset-x-8 top-12 h-56 rounded-full bg-luma-coral/10 blur-3xl" />
          <div className="relative mx-auto aspect-[4/5] max-h-[620px] overflow-hidden rounded-[2rem] border border-luma-hairline bg-luma-canvas shadow-popup sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/therapists-session.jpg"
              alt="A student and therapist speaking in a calm room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {statCards.map((card) => (
            <TherapistStatCard key={card.metric} {...card} />
          ))}
        </div>
      </div>
    </Section>
  )
}
