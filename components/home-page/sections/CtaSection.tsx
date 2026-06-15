import Link from 'next/link'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SECTION_IDS, sectionHref } from '@/lib/constants'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <WaveSection
      className="bg-beige text-center text-luma-mocha"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-luma-hairline bg-white px-4 py-2 text-sm text-luma-mocha/75 shadow-[0_8px_24px_rgba(61,47,30,0.05)]">
          <span aria-hidden="true">✦</span>
          <span>Launching fall 2026</span>
        </div>

        <h2 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Your degree is hard.
          <br />
          Getting help <em className="not-italic text-luma-coral">shouldn&apos;t be.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-luma-mocha/70 md:text-lg">
          Tell us you&rsquo;re interested and be first to access Luma when we launch. Students on
          the list will get priority access to the platform.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WaitlistRoleDialog triggerLabel="I'm interested" triggerSize="lg" />
          <Button
            asChild
            size="lg"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'border border-luma-hairline bg-white text-luma-mocha shadow-none hover:bg-luma-canvas hover:text-luma-mocha'
            )}
          >
            <Link href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}>Learn more</Link>
          </Button>
        </div>
      </div>
    </WaveSection>
  )
}
