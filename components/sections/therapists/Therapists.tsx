import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'

export function Therapists() {
  return (
    <Section id={SECTION_IDS.THERAPISTS}>
      <SectionHeader
        eyebrow="Our therapists"
        title={<>People you can <span className="text-luma-coral">trust</span></>}
        description="Every Luma therapist is BACP or UKCP accredited, DBS-checked, and supervised."
      />

      {/* Therapist card grid — placeholder */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-dashed border-border bg-beige p-6 space-y-3 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-luma-coral/20 flex items-center justify-center text-2xl text-luma-coral font-bold">
              ?
            </div>
            <p className="text-sm font-semibold text-main-text">Therapist name</p>
            <p className="text-xs text-muted-text">Speciality · CBT, ACT</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
