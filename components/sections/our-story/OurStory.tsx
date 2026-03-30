import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS } from '@/lib/constants/routes'

export function OurStory() {
  return (
    <Section id={SECTION_IDS.OUR_STORY} className="bg-beige">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Our story"
            title={<>Built by people who <span className="text-luma-coral">get it</span></>}
          />
          <p className="text-muted-text leading-relaxed">
            Luma was founded by a team of clinicians, researchers, and students who lived
            through the gaps in UK mental health provision. We knew waiting lists were broken.
            We decided to do something about it.
          </p>
          <p className="text-muted-text leading-relaxed">
            Today we work with universities, NHS partners, and independent therapists across
            the UK to make high-quality mental health support accessible to anyone who needs it —
            not just those who can afford to wait.
          </p>

          <div className="flex gap-10 pt-2">
            {[
              { stat: '5 days', label: 'Avg. time to first session' },
              { stat: '98%', label: 'Would recommend Luma' },
              { stat: '40+', label: 'University partners' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-luma-coral">{stat}</p>
                <p className="text-xs text-muted-text">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="h-80 rounded-2xl border border-dashed border-border bg-background flex items-center justify-center text-sm text-muted-text shadow-card">
          [ Founders / team photo ]
        </div>
      </div>
    </Section>
  )
}
