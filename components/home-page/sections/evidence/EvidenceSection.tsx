import Image from 'next/image'
import { Clock3, GraduationCap, TrendingUp, type LucideIcon } from 'lucide-react'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SECTION_IDS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { type ComparisonRow, COMPARISON_ROWS } from './evidence-data'

const evidenceStats: {
  value: string
  label: string
  icon: LucideIcon
  tone: 'coral' | 'sage'
  className: string
  valueClassName?: string
}[] = [
  {
    value: '17.9%',
    label: 'of UK undergraduates reported a mental health challenge in 2024',
    icon: GraduationCap,
    tone: 'coral',
    className: 'lg:-right-2 lg:top-0 lg:w-[360px] xl:right-0 xl:w-[400px]',
  },
  {
    value: '75%',
    label: 'NHS Talking Therapies target for starting treatment within 6 weeks',
    icon: Clock3,
    tone: 'sage',
    className: 'lg:bottom-8 lg:left-0 lg:w-[230px] xl:w-[250px]',
    valueClassName: 'text-luma-sage-deep',
  },
  {
    value: '67.4%',
    label: 'Of NHS Talking Therapies completers showed reliable improvement in May 2024',
    icon: TrendingUp,
    tone: 'coral',
    className: 'lg:bottom-5 lg:right-4 lg:w-[245px] xl:right-8 xl:w-[265px]',
    valueClassName: 'text-luma-coral-deep',
  },
]

const statToneClasses = {
  coral: 'bg-luma-coral-tint text-luma-coral-deep',
  sage: 'bg-luma-sage-soft text-luma-sage-deep',
} satisfies Record<(typeof evidenceStats)[number]['tone'], string>

function EvidenceStatCard({
  value,
  label,
  icon: Icon,
  tone,
  className,
  valueClassName,
}: (typeof evidenceStats)[number]) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-luma-hairline bg-white p-5 shadow-[0_14px_34px_rgba(61,47,30,0.07)]',
        'lg:absolute lg:z-20',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl',
            statToneClasses[tone]
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p
            className={cn(
              'font-heading text-4xl font-bold leading-none text-luma-coral',
              value === '17.9%' && 'md:text-5xl',
              valueClassName
            )}
          >
            {value}
          </p>
          <p className="mt-2 text-xs leading-snug text-luma-mocha/72">{label}</p>
        </div>
      </div>
    </div>
  )
}

function EvidenceVisual() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute left-1/2 top-1/2 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-coral/10 blur-3xl lg:block" />

      <div className="grid gap-4 lg:block lg:min-h-[480px]">
        <div className="relative mx-auto aspect-[4/5] max-h-[520px] overflow-hidden rounded-[2rem] border border-luma-hairline bg-luma-canvas shadow-[0_22px_54px_rgba(61,47,30,0.16)] sm:aspect-[5/4] lg:absolute lg:left-[12%] lg:top-8 lg:h-[390px] lg:w-[460px] xl:left-[14%] xl:h-[420px] xl:w-[500px]">
          <Image
            src="/images/evidence-session.jpg"
            alt="A student speaking with a therapist in a calm room"
            fill
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luma-mocha/18 via-transparent to-transparent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:block">
          {evidenceStats.map((stat) => (
            <EvidenceStatCard
              key={stat.value}
              {...stat}
              className={cn(stat.value === '17.9%' && 'sm:col-span-2', stat.className)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-luma-hairline bg-white shadow-[0_10px_28px_rgba(61,47,30,0.05)]">
      <div className="border-b border-luma-hairline bg-luma-coral-tint/70 px-5 py-3">
        <div className="grid grid-cols-3 items-center">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-luma-mocha/70">
            Luma vs. Alternatives
          </p>
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-luma-mocha/50">
            Cost
          </p>
          <p className="text-right text-[10px] font-semibold uppercase tracking-widest text-luma-mocha/50">
            Wait time
          </p>
        </div>
      </div>

      <div>
        {rows.map((row) => (
          <div
            key={row.service}
            className={cn(
              'grid grid-cols-3 items-center border-b border-luma-hairline px-5 py-3.5 last:border-b-0',
              row.isLuma
                ? 'border-l-[3px] border-l-luma-coral bg-luma-coral-tint/60'
                : 'border-l-[3px] border-l-transparent'
            )}
          >
            <span
              className={cn(
                'text-sm font-semibold',
                row.isLuma ? 'text-luma-coral-deep' : 'text-luma-mocha'
              )}
            >
              {row.service}
            </span>
            <span
              className={cn(
                'text-center text-sm',
                row.isLuma ? 'font-bold text-luma-coral-deep' : 'text-luma-mocha/60'
              )}
            >
              {row.cost}
            </span>
            <span
              className={cn(
                'text-right text-sm',
                row.isLuma ? 'font-semibold text-luma-coral-deep' : 'text-luma-mocha/60'
              )}
            >
              {row.wait}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-luma-hairline px-5 py-3">
        <p className="text-[11px] text-luma-mocha/55">
          Access speed &amp; cost compared — Luma leads on both.
        </p>
      </div>
    </div>
  )
}

export function EvidenceSection() {
  return (
    <WaveSection
      id={SECTION_IDS.EVIDENCE}
      className="bg-beige"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
        <div className="flex flex-col space-y-7">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral">
            The Evidence
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
            This isn&rsquo;t just <em className="not-italic text-luma-coral">good to have.</em>
            <br />
            It&rsquo;s urgent.
          </h2>

          <p className="text-base leading-relaxed text-luma-mocha/75">
            UK undergraduate mental health difficulties have nearly tripled since 2017. Luma is
            being built for faster, affordable access to student-aware support.
          </p>

          <div>
            <WaitlistRoleDialog
              triggerLabel="I'm ready to start →"
              triggerSize="lg"
              triggerClassName={cn(
                'inline-flex items-center gap-2 rounded-full px-7 py-3.5',
                'bg-luma-coral text-sm font-semibold text-white',
                'shadow-[0_4px_20px_rgba(244,123,102,0.30)]',
                'transition-all duration-200',
                'hover:bg-luma-coral-deep hover:shadow-[0_8px_30px_rgba(244,123,102,0.38)]'
              )}
            />
          </div>
        </div>

        <EvidenceVisual />
      </div>

      <div className="mt-10 lg:mt-14">
        <ComparisonTable rows={COMPARISON_ROWS} />
      </div>
    </WaveSection>
  )
}
