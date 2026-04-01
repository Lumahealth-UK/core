import { Section } from '@/components/marketing/Section'
import { sectionHref, SECTION_IDS } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'
import { FeatureCards } from './FeatureCards'

const AVATARS = [
  { initials: 'AH', bg: 'bg-luma-coral' },
  { initials: 'JN', bg: 'bg-luma-sage' },
  { initials: 'OP', bg: 'bg-luma-lilac' },
  { initials: 'TL', bg: 'bg-luma-sky' },
  { initials: 'RM', bg: 'bg-luma-gold' },
]

export function Hero() {
  return (
    <Section
      id={SECTION_IDS.HERO}
      className="flex items-start bg-gradient-to-b from-white to-luma-canvas pt-20 pb-24 md:pt-24 md:pb-28 lg:pb-32"
      containerClassName="max-w-[90rem] w-full"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        {/* Left: text content */}
        <div className="flex flex-col items-start gap-7 xl:gap-8">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-luma-hairline bg-white px-4 py-2 text-xs font-semibold text-main-text shadow-card sm:text-sm">
            <span className="text-luma-coral">✦</span>
            Launching Spring 2026 
          </span>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-main-text sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem]">
            Therapy that
            <br />
            <em className="italic text-luma-coral">actually gets</em>
            <br />
            student{' '}
            <span className="inline-block text-outline-main">life.</span>
          </h1>

          {/* Body */}
          <p className="max-w-md text-base text-muted-text md:text-lg xl:max-w-lg xl:text-xl">
            BACP-accredited therapists matched to your exact needs. Sessions from £25. Built by
            students, for students — across every UK university.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map(({ initials, bg }) => (
                <div
                  key={initials}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full border-2 border-white',
                    'text-[10px] font-bold text-white',
                    bg
                  )}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-luma-gold">★★★★★</p>
              <p className="text-sm text-muted-text">
                <strong className="text-main-text">Recommended by therapists</strong> who support students daily
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={sectionHref(SECTION_IDS.CONTACT)}
              className={cn(
                'inline-flex items-center rounded-full px-7 py-3 xl:px-8 xl:py-3.5',
                'bg-luma-coral text-sm font-semibold text-white xl:text-base',
                'hover:bg-luma-coral-deep transition-colors'
              )}
            >
              Join the waitlist — it&apos;s free →
            </a>
            <a
              href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}
              className="text-sm font-semibold text-main-text transition-colors hover:text-luma-coral"
            >
              See how it works ↓
            </a>
          </div>
        </div>

        {/* Right: floating UI cards */}
        <div className="hidden lg:block">
          <FeatureCards />
        </div>
      </div>
    </Section>
  )
}
