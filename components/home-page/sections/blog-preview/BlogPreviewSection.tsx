import Image from 'next/image'
import { Section } from '@/components/primitives/Section'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import { posts } from './blog-preview-data'

export function BlogPreviewSection() {
  return (
    <Section id={SECTION_IDS.BLOG} className="bg-white py-8 md:py-12">
      <SectionHeader
        eyebrow="Resources"
        title={
          <>
            From the <span className="text-luma-coral">Luma blog</span>
          </>
        }
        description="Evidence-based articles on mental health, student wellbeing, and self-care."
        centered
      />

      <div className="mx-auto mt-8 grid max-w-md gap-6">
        {posts.map((post) => (
          <Card
            asChild
            key={post.title}
            className="overflow-hidden border-luma-hairline bg-white shadow-card"
          >
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${post.title}`}
            >
              <div className="relative aspect-[16/9] border-b border-luma-hairline bg-luma-canvas">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 640px) 28rem, calc(100vw - 3rem)"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-luma-coral">
                  {post.tag}
                </p>
                <h3 className="font-heading font-semibold leading-snug text-main-text">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-text">{post.date}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  )
}
