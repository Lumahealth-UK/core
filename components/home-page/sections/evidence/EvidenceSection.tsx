import { WaveSection } from '@/components/primitives/WaveSection'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'
import { type ComparisonRow, COMPARISON_ROWS } from './evidence-data'

function PrimaryStat() {
  return (
    <div className="flex items-center gap-6 rounded-2xl border border-luma-hairline bg-white p-7 shadow-[0_10px_30px_rgba(61,47,30,0.06)]">
      <p className="shrink-0 font-heading text-6xl font-bold leading-none text-luma-coral">
        17.9%
      </p>
      <div className="h-12 w-px shrink-0 bg-luma-hairline" aria-hidden="true" />
      <p className="text-sm leading-snug text-luma-mocha/75">
        of UK undergraduates reported a mental health challenge in 2024
      </p>
    </div>
  )
}

function SecondaryStat({
  value,
  label,
  dimmed = false,
}: {
  value: string
  label: string
  dimmed?: boolean
}) {
  return (
    <div className="rounded-2xl border border-luma-hairline bg-white p-5 shadow-[0_6px_22px_rgba(61,47,30,0.04)]">
      <p
        className={cn(
          'font-heading text-4xl font-bold leading-none',
          dimmed ? 'text-luma-coral-light' : 'text-luma-coral-deep',
        )}
      >
        {value}
      </p>
      <p className="mt-2 text-xs leading-snug text-luma-mocha/75">{label}</p>
    </div>
  )
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-luma-hairline bg-white shadow-[0_10px_28px_rgba(61,47,30,0.05)]">
      {/* Table header */}
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

      {/* Rows */}
      <div>
        {rows.map((row) => (
          <div
            key={row.service}
            className={cn(
              'grid grid-cols-3 items-center border-b border-luma-hairline px-5 py-3.5 last:border-b-0',
              row.isLuma
                ? 'border-l-[3px] border-l-luma-coral bg-luma-coral-tint/60'
                : 'border-l-[3px] border-l-transparent',
            )}
          >
            <span
              className={cn(
                'text-sm font-semibold',
                row.isLuma ? 'text-luma-coral-deep' : 'text-luma-mocha',
              )}
            >
              {row.service}
            </span>
            <span
              className={cn(
                'text-sm text-center',
                row.isLuma ? 'font-bold text-luma-coral-deep' : 'text-luma-mocha/60',
              )}
            >
              {row.cost}
            </span>
            <span
              className={cn(
                'text-sm text-right',
                row.isLuma ? 'font-semibold text-luma-coral-deep' : 'text-luma-mocha/60',
              )}
            >
              {row.wait}
            </span>
          </div>
        ))}
      </div>

      {/* Footer microcopy */}
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
      className="bg-luma-espresso"
      topWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20">
        {/* LEFT: Narrative */}
        <div className="flex flex-col space-y-7">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral-light">
            The Evidence
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            This isn&rsquo;t just{' '}
            <em className="not-italic text-luma-coral-light">good to have.</em>
            <br />
            It&rsquo;s urgent.
          </h2>

          <p className="text-base leading-relaxed text-white/62">
            UK undergraduate mental health difficulties have nearly tripled since 2017.
            Luma is being built for faster, affordable access to student-aware support.
          </p>

          <div>
            <a
              href={sectionHref(SECTION_IDS.CONTACT)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-7 py-3.5',
                'bg-luma-coral text-sm font-semibold text-white',
                'shadow-[0_4px_20px_rgba(244,123,102,0.30)]',
                'transition-all duration-200',
                'hover:bg-luma-coral-deep hover:shadow-[0_8px_30px_rgba(244,123,102,0.38)]',
              )}
            >
              I&rsquo;m ready to start <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Proof */}
        <div className="flex flex-col gap-4">
          <PrimaryStat />

          <div className="grid grid-cols-2 gap-4">
            <SecondaryStat
              value="75%"
              label="NHS Talking Therapies target for starting treatment within 6 weeks"
              dimmed
            />
            <SecondaryStat
              value="67.4%"
              label="Of NHS Talking Therapies completers showed reliable improvement in May 2024"
            />
          </div>

          <ComparisonTable rows={COMPARISON_ROWS} />
        </div>
      </div>
    </WaveSection>
  )
}
