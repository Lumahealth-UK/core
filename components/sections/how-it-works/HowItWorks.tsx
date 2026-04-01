import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { howItWorksSteps } from './how-it-works-data'
import { HowItWorksClient } from './HowItWorksClient'

export function HowItWorks() {
  return (
    <Section
      id={SECTION_IDS.HOW_IT_WORKS}
      className="bg-white"
      containerClassName="max-w-[88rem] px-6"
    >
      <SectionHeader
        eyebrow="How It Works"
        title={
          <>
            From sign-up to{' '}
            <em className="text-luma-coral">first session</em>
            {' '}in under 48 hours.
          </>
        }
        description="We removed every obstacle that usually stops students from getting help. No GP referral. No waiting list. No judgement."
        centered
        className="[&_h2]:text-main-text [&_p]:mx-auto [&_p]:max-w-3xl [&_p]:text-muted-text [&_span]:bg-beige [&_span]:text-luma-coral"
      />
      <HowItWorksClient steps={howItWorksSteps} />
    </Section>
  )
}
