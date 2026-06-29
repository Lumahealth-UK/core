import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SECTION_IDS, sectionHref } from '@/lib/constants'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const trustNotes = ['No spam ever', 'Priority launch access', 'Cancel anytime'] as const

export function CtaSection() {
  return (
    <WaveSection
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_15%,rgba(244,123,102,0.20),transparent_32%),linear-gradient(180deg,#4d3b31_0%,#3a2d25_62%,#251d18_100%)] text-center text-white"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-coral/10 blur-3xl" />
      <div className="mx-auto max-w-3xl">
        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/72 shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          <span className="text-luma-coral" aria-hidden="true">
            ✦
          </span>
          <span>Launching fall 2026</span>
        </div>

        <h2 className="relative mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Your degree is hard.
          <br />
          Getting help <em className="not-italic text-luma-coral">shouldn&apos;t be.</em>
        </h2>

        <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
          Tell us you&rsquo;re interested and be first to access Luma when we launch. Students on
          the list will get priority access to the platform.
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <WaitlistRoleDialog triggerLabel="I'm interested" triggerSize="lg" />
          <Button
            asChild
            size="lg"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'border border-white/10 bg-white text-luma-mocha shadow-none hover:bg-white/90 hover:text-luma-mocha'
            )}
          >
            <Link href={sectionHref(SECTION_IDS.HOW_IT_WORKS)}>Learn more</Link>
          </Button>
        </div>

        <div className="relative mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/58">
          {trustNotes.map((note) => (
            <span key={note} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-luma-sage" aria-hidden="true" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </WaveSection>
  )
}
