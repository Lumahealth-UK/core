import { CalendarDays, CircleDollarSign, ShieldCheck, Sparkles } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS } from '@/lib/constants/routes'

const perks = [
  {
    title: 'Intelligent student matching',
    description:
      'Students are matched around specialisms, preferences, and therapeutic fit so you spend less time on mismatches.',
    Icon: Sparkles,
  },
  {
    title: 'You control your schedule',
    description:
      'Share the slots you want to offer and let students book directly into the times that suit your practice.',
    Icon: CalendarDays,
  },
  {
    title: 'Transparent, fair pay',
    description:
      'Keep pricing student-accessible while making rates and platform costs easy to understand.',
    Icon: CircleDollarSign,
  },
  {
    title: 'Privacy and compliance built in',
    description:
      'Secure notes, messaging, and safeguarding pathways are part of the product from day one.',
    Icon: ShieldCheck,
  },
] as const

export function ForTherapistsSection() {
  return (
    <Section id={SECTION_IDS.FOR_THERAPISTS} className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-sage-deep">
              For therapists
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
              Join a platform built around{' '}
              <em className="not-italic text-luma-sage-deep">your</em> practice.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-luma-mocha/70">
              Luma connects you with students who need the kind of support you already provide
              best, while keeping booking, communication, and admin simple.
            </p>
          </div>

          <div className="space-y-4">
            {perks.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-3xl border border-luma-hairline bg-luma-canvas p-5 shadow-[0_10px_28px_rgba(61,47,30,0.04)]"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-luma-sage-soft text-luma-sage-deep">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-luma-mocha">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-luma-mocha/70">{description}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="mailto:hello@lumahealth.co.uk?subject=Therapist%20Partnership"
            className="inline-flex items-center gap-2 rounded-full bg-luma-sage px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-luma-sage-deep"
          >
            Partner with Luma <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Therapist-side proof cards are hidden until Luma has real launch data and real partners to quote.
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={[
                'rounded-3xl border p-6 shadow-[0_12px_30px_rgba(61,47,30,0.05)]',
                stat.dark
                  ? 'border-luma-mocha bg-luma-mocha text-white'
                  : 'border-luma-hairline bg-white text-luma-mocha',
              ].join(' ')}
            >
              <p
                className={[
                  'font-heading text-4xl font-bold leading-none',
                  stat.dark ? 'text-luma-coral-light' : 'text-luma-sage-deep',
                ].join(' ')}
              >
                {stat.value}
              </p>
              <p className={['mt-3 text-sm leading-7', stat.dark ? 'text-white/60' : 'text-luma-mocha/70'].join(' ')}>
                {stat.label}
              </p>
            </article>
          ))}

          <article className="rounded-3xl border border-luma-hairline bg-white p-6 shadow-[0_12px_30px_rgba(61,47,30,0.05)] sm:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-sage-deep">
              Therapist voice
            </p>
            <p className="mt-3 text-base leading-8 text-luma-mocha/70">
              &ldquo;The matching quality genuinely surprised me. The students I meet through Luma
              are aligned with my specialisms, which makes the work feel more focused from the very
              first session.&rdquo;
            </p>
            <div className="mt-5">
              <p className="font-semibold text-luma-mocha">Dr. Maya Hassan</p>
              <p className="text-sm text-luma-mocha/55">BACP Accredited · CBT &amp; ACT · 9 yrs</p>
            </div>
          </article>
        </div>
        */}
      </div>
    </Section>
  )
}
