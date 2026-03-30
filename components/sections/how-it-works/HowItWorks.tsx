import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { howItWorksSteps } from './how-it-works-data'

export function HowItWorks() {
  return (
    <Section id={SECTION_IDS.HOW_IT_WORKS} className="bg-beige">
      <SectionHeader
        eyebrow="Process"
        title={<>Three steps to <span className="text-luma-coral">better care</span></>}
        description="From sign-up to your first session in days, not months."
        centered
      />

      <ol className="mt-14 grid gap-8 sm:grid-cols-3">
        {howItWorksSteps.map((step, i) => (
          <li key={step.title} className="relative space-y-3 rounded-xl bg-background p-6 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-luma-coral/10 font-display text-lg font-bold text-luma-coral">
              {i + 1}
            </span>
            <h3 className="font-semibold text-main-text">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-text">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
