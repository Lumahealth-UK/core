import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { testimonials } from './student-stories-data'
import { StudentStoriesClient } from './StudentStoriesClient'

export function StudentStoriesSection() {
  return (
    <Section id={SECTION_IDS.STUDENT_STORIES} className="bg-white">
      <SectionHeader
        eyebrow="Student stories"
        title={
          <>
            Real students,{' '}
            <em className="block not-italic italic font-heading text-luma-coral">
              real change.
            </em>
          </>
        }
        centered
      />
      <StudentStoriesClient testimonials={testimonials} />
    </Section>
  )
}
