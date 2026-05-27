import Link from 'next/link'
import { Section } from '@/components/primitives/Section'
import { sectionHref, SECTION_IDS } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { FeatureCards } from './FeatureCards'

const AVATARS = [
  { initials: 'AH', bg: 'bg-luma-coral' },
  { initials: 'JN', bg: 'bg-luma-sage' },
  { initials: 'OP', bg: 'bg-luma-lilac' },
  { initials: 'TL', bg: 'bg-luma-sky' },
  { initials: 'RM', bg: 'bg-luma-gold' },
]

export function HeroSection() {
  return (
    <Section
      id={SECTION_IDS.HERO}
      className="relative -mt-44 overflow-hidden flex items-start bg-[radial-gradient(circle_at_18%_18%,rgba(244,123,102,0.18),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(139,175,139,0.22),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff6f1_48%,var(--color-luma-canvas)_100%)] !pt-56 pb-24 md:pb-28 lg:pb-32"
      containerClassName="max-w-screen-xl w-full"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-24">
        {/* Left: text content */}
        <div className="flex flex-col items-start gap-7 xl:gap-8">
          {/* Badge */}
          <Badge variant="outline" className="gap-2 sm:text-sm">
            <span className="text-luma-coral">✦</span>
            Launching fall 2026
          </Badge>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-main-text sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.35rem]">
            Therapy that
            <br />
            <em className="italic text-luma-coral">actually gets</em>
            <br />
            student <span className="inline-block text-outline-main">life.</span>
          </h1>

          {/* Body */}
          <p className="max-w-md text-base text-muted-text md:text-lg xl:max-w-lg xl:text-xl">
            BACP-accredited therapists matched to your exact needs. Sessions from £32. Built by
            students, for students - across every UK university.
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
                <strong className="text-main-text">Recommended by therapists</strong> who support
                students daily
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <WaitlistRoleDialog
              triggerLabel="I'm interested →"
              triggerSize="lg"
              triggerClassName="xl:px-8 xl:py-3.5 xl:text-base"
            />
            <Button
              asChild
              variant="link"
              size="md"
              className={cn(
                buttonVariants({ variant: 'link', size: 'md' }),
                'px-0 text-main-text hover:text-luma-coral'
              )}
            >
              <Link href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}>See how it works ↓</Link>
            </Button>
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
