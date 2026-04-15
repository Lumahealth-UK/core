import Image from 'next/image'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS } from '@/lib/constants/routes'

type ValueVisual = {
  title: string
  description: string
  stoneSrc: string
  stoneAlt: string
  side: 'left' | 'right'
}

const VALUES_VISUAL: ValueVisual[] = [
  {
    title: 'Compassion',
    description:
      "We don't just build digital tools - we create human experiences. Every feature starts with empathy.",
    stoneSrc: '/Images/Story Icons/Topstone.png',
    stoneAlt: 'Top balancing stone',
    side: 'right',
  },
  {
    title: 'Accessibility',
    description: 'Mental health support should be a right, not a luxury.',
    stoneSrc: '/Images/Story Icons/Middlestone.png',
    stoneAlt: 'Middle balancing stone',
    side: 'left',
  },
  {
    title: 'Growth',
    description: 'Everyone grows differently. We support your growth at a pace that feels right for you.',
    stoneSrc: '/Images/Story Icons/Bottomstone.png',
    stoneAlt: 'Bottom balancing stone',
    side: 'right',
  },
]

export function OurStory() {
  return (
    <Section id={SECTION_IDS.OUR_STORY} className="bg-beige">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-luma-hairline bg-white px-4 py-2 text-xs font-semibold text-luma-mocha/80 shadow-[0_8px_24px_rgba(61,47,30,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-luma-coral" aria-hidden="true" />
            <span>Est. 2026 · Leeds, UK</span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral">Our story</p>

          <h2 className="font-display text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
            Getting therapy as a student{' '}
            <em className="not-italic text-luma-coral">shouldn&rsquo;t be</em> this hard.
          </h2>

          <p className="text-base leading-relaxed text-luma-mocha/75">
            Between deadlines, financial pressure, and feeling isolated, the last thing you need
            is a 6-week wait list or a £70 price tag. We know because we lived it.
          </p>

          <p className="text-base leading-relaxed text-luma-mocha/75">
            Luma Health is based in Leeds and built by former students who know exactly what the
            system fails to offer - and who decided to fix it.
          </p>

          <div className="pt-2">
            <Image
              src="/Icons/signature.png"
              alt="The Luma Team"
              width={150}
              height={40}
              className="h-auto w-[120px] opacity-70"
            />
          </div>
        </div>

        <div className="space-y-2 lg:space-y-0">
          {VALUES_VISUAL.map((item) => (
            <div key={item.title} className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div className="hidden sm:block">
                {item.side === 'left' && (
                  <div className="flex items-center justify-end gap-3">
                    <div className="max-w-xs text-right">
                      <p className="text-2xl font-bold leading-tight text-luma-coral">{item.title}</p>
                      <p className="mt-1.5 text-base leading-relaxed text-luma-mocha/80">
                        {item.description}
                      </p>
                    </div>
                    <span className="h-px w-20 bg-luma-coral/60" aria-hidden="true" />
                  </div>
                )}
              </div>

              <div className="mx-auto w-full max-w-[320px] sm:max-w-[280px] lg:max-w-[320px]">
                <Image
                  src={item.stoneSrc}
                  alt={item.stoneAlt}
                  width={640}
                  height={320}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="hidden sm:block">
                {item.side === 'right' && (
                  <div className="flex items-center gap-3">
                    <span className="h-px w-20 bg-luma-coral/60" aria-hidden="true" />
                    <div className="max-w-xs">
                      <p className="text-2xl font-bold leading-tight text-luma-coral">{item.title}</p>
                      <p className="mt-1.5 text-base leading-relaxed text-luma-mocha/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="sm:hidden">
                <p className="text-xl font-bold leading-tight text-luma-coral">{item.title}</p>
                <p className="mt-1.5 text-base leading-relaxed text-luma-mocha/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
