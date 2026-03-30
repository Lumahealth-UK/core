import { Section } from '@/components/marketing/Section'

const LOGOS = [
  'University of Manchester',
  'UCL',
  'King\'s College London',
  'University of Edinburgh',
  'Bristol University',
  'Leeds University',
]

export function LogoCloud() {
  return (
    <Section className="py-12 md:py-16">
      <p className="mb-8 text-center text-sm font-medium text-muted-text">
        Trusted by students at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {LOGOS.map((name) => (
          <div
            key={name}
            className="rounded border border-dashed border-border px-6 py-3 text-xs font-semibold text-muted-text"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  )
}
