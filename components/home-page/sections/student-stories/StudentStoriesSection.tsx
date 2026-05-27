import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { testimonials } from './student-stories-data'
import { StudentStoriesClient } from './StudentStoriesClient'

export function StudentStoriesSection() {
  return (
    <Section id={SECTION_IDS.STUDENT_STORIES} className="bg-white">
      <SectionHeader
        eyebrow="Student voices"
        title={
          <>
            What students are{' '}
            <em className="block not-italic italic font-heading text-luma-coral">
              hoping for.
            </em>
          </>
        }
        centered
      />
      <StudentStoriesClient testimonials={testimonials} />
    </Section>
  )
}
