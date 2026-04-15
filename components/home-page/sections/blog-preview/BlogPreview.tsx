import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { Card } from '@/components/ui/card'
import { posts } from './blog-preview-data'

export function BlogPreview() {
  return (
    <Section id={SECTION_IDS.BLOG} className="bg-beige">
      <SectionHeader
        eyebrow="Resources"
        title={<>From the <span className="text-luma-coral">Luma blog</span></>}
        description="Evidence-based articles on mental health, student wellbeing, and self-care."
        centered
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <Card asChild key={post.title} className="bg-background overflow-hidden"><article>
            <div className="h-40 bg-beige border-b border-dashed border-border flex items-center justify-center text-xs text-muted-text">
              [ Post image ]
            </div>
            <div className="p-5 space-y-2">
              <p className="text-xs text-luma-coral font-semibold uppercase tracking-wider">{post.tag}</p>
              <h3 className="font-semibold text-main-text leading-snug">{post.title}</h3>
              <p className="text-xs text-muted-text">{post.date}</p>
            </div>
          </article></Card>
        ))}
      </div>
    </Section>
  )
}
