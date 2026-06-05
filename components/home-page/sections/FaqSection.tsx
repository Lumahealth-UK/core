'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/primitives/Section'
import { SECTION_IDS } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'

const faqItems = [
  {
    question: 'Do I need a GP referral?',
    answer:
      'No. You can sign up and book directly with no referral, no diagnosis, and no waiting list.',
  },
  {
    question: 'How are therapists vetted?',
    answer:
      'Every Luma therapist must be BACP or UKCP accredited, have relevant post-qualification experience, and be reviewed before they are shown to students.',
  },
  {
    question: "What if the match isn't right?",
    answer:
      'We offer a free rematch if your first therapist does not feel like the right fit. Therapeutic fit matters.',
  },
  {
    question: 'Is my data private from my university?',
    answer:
      'Yes. Your university does not get access to your sessions, therapist notes, or personal information you share on Luma.',
  },
  {
    question: 'Can I cancel or pause my plan?',
    answer:
      'Yes. You can cancel or pause any time, so support can flex around exams, holidays, and changing schedules.',
  },
  {
    question: 'What happens in a crisis?',
    answer:
      'Luma is not a crisis service. If you are in immediate danger, call 999, contact Samaritans on 116 123, or use NHS urgent mental health support.',
  },
  {
    question: 'Is there a student discount?',
    answer:
      'Student pricing is already built in. We focus on making the core offer more affordable rather than hiding it behind a promo code.',
  },
] as const

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2)

  return (
    <Section id={SECTION_IDS.FAQ} className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-4 lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral">FAQ</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-luma-mocha md:text-5xl">
            Questions, <em className="not-italic text-luma-coral-deep">answered.</em>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-luma-mocha/70">
            Still unsure? Email{' '}
            <a
              href="mailto:lumahealthuk@gmail.com"
              className="font-semibold text-luma-coral-deep transition-colors hover:text-luma-coral"
            >
              lumahealthuk@gmail.com
            </a>{' '}
            and we&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-white transition-colors',
                  isOpen ? 'border-luma-coral/25' : 'border-luma-hairline'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={cn(
                    'flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors',
                    isOpen ? 'bg-luma-coral-tint/70 text-luma-coral-deep' : 'hover:bg-beige/60'
                  )}
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      'text-[0.92rem] font-semibold leading-snug',
                      isOpen ? 'text-luma-coral-deep' : 'text-luma-mocha'
                    )}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 flex-shrink-0 transition-transform',
                      isOpen ? 'rotate-180 text-luma-coral-deep' : 'text-luma-mocha/45'
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.88rem] leading-7 text-luma-mocha/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
