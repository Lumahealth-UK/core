import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'
import { Card } from '@/components/ui/card'
import { posts } from './blog-preview-data'

export function BlogPreviewSection() {
  return (
    <Section id={SECTION_IDS.BLOG} className="bg-luma-mocha">
      <SectionHeader
        eyebrow="Resources"
        title={<>From the <span className="text-luma-coral">Luma blog</span></>}
        description="Evidence-based articles on mental health, student wellbeing, and self-care."
        centered
        className="[&_h2]:text-white [&_p]:text-white/55 [&>span]:bg-white/10 [&>span]:text-luma-coral-light"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <Card asChild key={post.title} className="overflow-hidden border-white/10 bg-luma-wood-mid"><article>
            <div className="h-40 border-b border-dashed border-white/12 bg-luma-espresso flex items-center justify-center text-xs text-white/45">
              [ Post image ]
            </div>
            <div className="p-5 space-y-2">
              <p className="text-xs text-luma-coral-light font-semibold uppercase tracking-wider">{post.tag}</p>
              <h3 className="font-heading font-semibold text-white leading-snug">{post.title}</h3>
              <p className="text-xs text-white/50">{post.date}</p>
            </div>
          </article></Card>
        ))}
      </div>
    </Section>
  )
}
