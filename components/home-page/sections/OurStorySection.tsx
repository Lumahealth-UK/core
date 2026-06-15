import { Globe, HeartHandshake, ShieldCheck, Sprout } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS } from '@/lib/constants'

const values = [
  {
    title: 'Compassion first',
    description:
      'We do not just build digital tools. Every part of Luma is meant to feel human, calm, and supportive.',
    Icon: HeartHandshake,
    iconClassName: 'bg-luma-coral-tint text-luma-coral-deep',
  },
  {
    title: 'Accessibility as a right',
    description:
      'Mental health support should not be a luxury for students who can afford private rates.',
    Icon: Globe,
    iconClassName: 'bg-luma-sage-soft text-luma-sage-deep',
  },
  {
    title: 'Growth at your pace',
    description:
      'Everyone moves differently. We support progress that feels sustainable, not pressured.',
    Icon: Sprout,
    iconClassName: 'bg-luma-coral-tint text-luma-coral-deep',
  },
  {
    title: 'Radical privacy',
    description:
      'Your university, tutors, and family do not get access to what you share. Your care stays yours.',
    Icon: ShieldCheck,
    iconClassName: 'bg-luma-sage-soft text-luma-sage-deep',
  },
] as const

export function OurStorySection() {
  return (
    <Section id={SECTION_IDS.OUR_STORY} className="bg-beige">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-luma-hairline bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-luma-mocha/70 shadow-[0_8px_24px_rgba(61,47,30,0.05)]">
            <span className="h-2 w-2 rounded-full bg-luma-coral" aria-hidden="true" />
            Est. 2026 · Leeds, UK
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral">
              Our story
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
              Getting therapy as a student{' '}
              <em className="not-italic text-luma-coral">shouldn&apos;t be</em> this hard.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-luma-mocha/70">
            Between deadlines, financial pressure, and feeling isolated, the last thing you need is
            a long waitlist or a price that rules support out before you even begin.
          </p>

          <p className="text-base leading-relaxed text-luma-mocha/70">
            Luma Health is built by people who understand student life and want therapy to feel
            easier to access, easier to trust, and easier to keep up with.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ title, description, Icon, iconClassName }) => (
            <article
              key={title}
              className="rounded-3xl border border-luma-hairline bg-white p-6 shadow-[0_10px_30px_rgba(61,47,30,0.05)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconClassName}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-luma-mocha">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-luma-mocha/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
