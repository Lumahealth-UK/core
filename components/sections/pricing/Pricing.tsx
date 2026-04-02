import { Section } from '@/components/marketing/Section'
import { SectionHeader } from '@/components/marketing/SectionHeader'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { Card } from '@/components/ui/card'
import { plans } from './pricing-data'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <Section id={SECTION_IDS.PRICING} className="bg-beige">
      <SectionHeader
        eyebrow="Pricing"
        title="Transparent, affordable plans"
        description="No hidden fees. Cancel any time."
        centered
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              'rounded-2xl p-8 space-y-6',
              plan.highlighted ? 'bg-luma-coral text-white shadow-popup' : 'bg-background'
            )}
          >
            <div>
              <p className={cn('text-xs font-semibold uppercase tracking-widest', plan.highlighted ? 'text-white/70' : 'text-luma-coral')}>
                {plan.name}
              </p>
              <p className={cn('mt-1 font-display text-4xl font-bold', plan.highlighted ? 'text-white' : 'text-main-text')}>
                {plan.price}
              </p>
              <p className={cn('mt-2 text-sm', plan.highlighted ? 'text-white/80' : 'text-muted-text')}>
                {plan.description}
              </p>
            </div>

            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className={cn('flex items-center gap-2 text-sm', plan.highlighted ? 'text-white/90' : 'text-muted-text')}>
                  <span className={cn('h-1.5 w-1.5 flex-shrink-0 rounded-full', plan.highlighted ? 'bg-white' : 'bg-luma-coral')} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={sectionHref(SECTION_IDS.CONTACT)}
              className={cn(
                'block w-full rounded-full py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90',
                plan.highlighted ? 'bg-white text-luma-coral' : 'bg-luma-coral text-white'
              )}
            >
              {plan.cta}
            </a>
          </Card>
        ))}
      </div>
    </Section>
  )
}
