import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { evidenceStats } from './evidence-data'

export function Evidence() {
  return (
    <Section id={SECTION_IDS.EVIDENCE}>
      <SectionHeader
        eyebrow="Evidence"
        title={<>The numbers <span className="text-luma-coral">speak</span></>}
        description="Our outcomes are independently tracked. No spin."
        centered
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {evidenceStats.map(({ value, label, source }) => (
          <div key={label} className="rounded-xl bg-beige p-6 text-center shadow-card">
            <p className="font-display text-4xl font-bold text-luma-coral">{value}</p>
            <p className="mt-2 text-sm font-semibold text-main-text">{label}</p>
            {source && <p className="mt-1 text-xs text-muted-text">{source}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
