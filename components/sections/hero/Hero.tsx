import { Section } from '@/components/marketing/Section'
import { sectionHref, SECTION_IDS } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <Section id={SECTION_IDS.HERO} className="pb-0 pt-20 md:pt-28">
      <div className="flex flex-col items-center gap-8 text-center">
        <span className="inline-block rounded-full bg-beige px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-luma-coral">
          Mental health support
        </span>

        <h1 className="font-display text-5xl font-bold leading-tight text-main-text md:text-7xl">
          Feel better,{' '}
          <span className="text-luma-coral">sooner</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-text">
          Luma Health connects students and young adults with vetted therapists — faster referrals,
          affordable sessions, and care that actually fits your life.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={sectionHref(SECTION_IDS.PRICING)}
            className={cn(
              'rounded-full bg-luma-coral px-8 py-3 font-semibold text-white',
              'hover:opacity-90 transition-opacity'
            )}
          >
            See plans
          </a>
          <a
            href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}
            className={cn(
              'rounded-full border border-luma-coral px-8 py-3 font-semibold text-luma-coral',
              'hover:bg-beige transition-colors'
            )}
          >
            How it works
          </a>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="mt-16 h-72 rounded-t-2xl border border-b-0 border-dashed border-border bg-beige/50 flex items-center justify-center text-sm text-muted-text">
        [ Hero illustration / screenshot ]
      </div>
    </Section>
  )
}
