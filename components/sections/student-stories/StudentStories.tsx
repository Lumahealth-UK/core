import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { testimonials } from './student-stories-data'

export function StudentStories() {
  return (
    <Section id={SECTION_IDS.STUDENT_STORIES}>
      <SectionHeader
        eyebrow="Student stories"
        title="Real people, real change"
        description="Hear from students who found the support they needed."
        centered
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-4 rounded-xl bg-beige p-6 shadow-card"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-main-text">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-luma-coral/20 flex items-center justify-center text-xs font-bold text-luma-coral">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-main-text">{t.name}</p>
                <p className="text-xs text-muted-text">{t.university}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
