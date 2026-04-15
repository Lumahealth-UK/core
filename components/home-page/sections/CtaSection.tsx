import Link from 'next/link'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'

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
            <strong className="text-luma-coral-light">Join 2,400+ students</strong> already on the
            waitlist
          </span>
        </div>

        <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
          Your degree is hard.
          <br />
          Getting help <em className="not-italic text-luma-coral-light">shouldn&apos;t be.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          Join the waitlist and be first to access Luma when we launch. Early students will get
          priority access to the platform.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WaitlistRoleDialog triggerLabel="Join the waitlist" triggerSize="lg" />
          <Link
            href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}
            className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-base font-semibold text-white transition-all hover:bg-white/8 hover:text-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </Section>
  )
}
