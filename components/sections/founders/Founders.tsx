import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { founders } from './founders-data'

export function Founders() {
  return (
    <Section id={SECTION_IDS.FOUNDERS} className="bg-beige">
      <SectionHeader
        eyebrow="The team"
        title="Meet the founders"
        centered
      />

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {founders.map((f) => (
          <div key={f.name} className="flex flex-col items-center gap-3 text-center">
            <div className="h-24 w-24 rounded-full border-2 border-dashed border-border bg-background flex items-center justify-center text-2xl font-bold text-luma-coral">
              {f.name[0]}
            </div>
            <div>
              <p className="font-semibold text-main-text">{f.name}</p>
              <p className="text-sm text-muted-text">{f.role}</p>
            </div>
            <p className="max-w-xs text-xs text-muted-text leading-relaxed">{f.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
