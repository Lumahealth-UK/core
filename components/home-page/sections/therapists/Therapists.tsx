import Image from 'next/image'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SECTION_IDS } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'
import { type Therapist, THERAPISTS, TRUST_SIGNALS } from './therapists-data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-luma-coral" aria-hidden="true">★</span>
      <span className="text-sm font-semibold text-white">{rating}</span>
    </div>
  )
}

function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-2xl p-6',
        'bg-gradient-to-b from-luma-wood-mid to-luma-mocha',
        'border border-white/8',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:from-luma-wood hover:to-luma-wood-mid',
        'hover:border-white/20',
        'hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]'
      )}
    >
      <div className="h-16 w-16 overflow-hidden rounded-xl">
        <Image
          src={therapist.photo}
          alt={therapist.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-5">
        <p className="text-base font-semibold text-white">{therapist.name}</p>
        <p className="mt-0.5 text-xs text-white/40">{therapist.credential}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {therapist.specialties.map((s) => (
          <span
            key={s}
            className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/55"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-5">
        <StarRating rating={therapist.rating} />
        <span className="text-xs text-white/35">{therapist.students} students</span>
      </div>
    </article>
  )
}

export function Therapists() {
  return (
    <WaveSection
      id={SECTION_IDS.THERAPISTS}
      className="bg-luma-espresso"
      containerClassName="max-w-[90rem] w-full"
      topWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
      bottomWave={{ front: 'var(--color-beige)', back: 'var(--color-luma-mocha)' }}
    >
      <div className="flex items-start justify-between gap-16">
        <div className="max-w-lg space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-luma-coral">
            Our therapists
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Every therapist <span className="italic text-luma-coral">vetted,</span> accredited, student-aware.
          </h2>
          <p className="text-base leading-relaxed text-white/45">
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
              Find your therapist <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hidden shrink-0 flex-col justify-between gap-8 self-stretch pt-1 lg:flex">
          {TRUST_SIGNALS.map((s) => (
            <div key={s.metric} className="text-right">
              <p className="font-display text-3xl font-bold text-white">{s.metric}</p>
              <p className="mt-0.5 text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {THERAPISTS.map((t) => (
          <TherapistCard key={t.name} therapist={t} />
        ))}
      </div>
    </WaveSection>
  )
}
