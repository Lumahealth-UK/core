import Link from 'next/link'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <Section className="relative overflow-hidden bg-luma-espresso py-20 text-center text-white md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(244,123,102,0.16),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-white/80">
          <span aria-hidden="true">✦</span>
          <span>
            Launching Spring 2026 ·{' '}
            <strong className="text-luma-coral-light">Early access</strong> interest list now open
          </span>
        </div>

        <h2 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Your degree is hard.
          <br />
          Getting help <em className="not-italic text-luma-coral-light">shouldn&apos;t be.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          Tell us you&rsquo;re interested and be first to access Luma when we launch. Early students will get
          priority access to the platform.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WaitlistRoleDialog triggerLabel="I'm interested" triggerSize="lg" />
          <Button
            asChild
            size="lg"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'border border-white/20 bg-transparent text-white shadow-none hover:bg-white/8 hover:text-white'
            )}
          >
            <Link href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}>Learn more</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
