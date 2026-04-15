import { WaveSection } from '@/components/primitives/WaveSection'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { PricingClient } from './PricingClient'

export function PricingSection() {
  return (
    <WaveSection
      id={SECTION_IDS.PRICING}
      className="bg-luma-espresso"
      topWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
      bottomWave={{ front: 'var(--color-beige)', back: 'var(--color-luma-mocha)' }}
    >
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Less than a{' '}
            <em className="not-italic text-luma-coral">night out.</em>
            <br />
            More than you&rsquo;d expect.
          </>
        }
        description="We've worked hard to make professional therapy genuinely affordable for students — not as a loss-leader, but as a core commitment."
        centered
        className="[&_h2]:text-white [&_p]:text-white/55 [&>span]:bg-white/10 [&>span]:text-luma-coral"
      />
      <PricingClient />
    </WaveSection>
  )
}
