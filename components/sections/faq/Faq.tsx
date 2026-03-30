import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { faqItems } from './faq-data'

export function Faq() {
  return (
    <Section id={SECTION_IDS.FAQ}>
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions"
        centered
      />

      <dl className="mt-14 mx-auto max-w-3xl divide-y divide-border">
        {faqItems.map(({ question, answer }) => (
          <details key={question} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-main-text list-none">
              {question}
              <span className="flex-shrink-0 text-luma-coral transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-text">{answer}</p>
          </details>
        ))}
      </dl>
    </Section>
  )
}
