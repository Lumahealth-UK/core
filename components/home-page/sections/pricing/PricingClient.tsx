'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SECTION_IDS, sectionHref } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { type BillingMode, type Plan, PLANS } from './pricing-data'

function BillingToggle({
  mode,
  onChange,
}: {
  mode: BillingMode
  onChange: (m: BillingMode) => void
}) {
  return (
    <div className="relative flex rounded-full bg-luma-mocha p-1">
      {/* sliding knob */}
      <div
        className={cn(
          'absolute inset-y-1 w-1/2 rounded-full bg-luma-coral transition-transform duration-200 ease-out',
          mode === 'monthly' && 'translate-x-full'
        )}
      />
      {(['session', 'monthly'] as const).map((m) => (
        <Button
          key={m}
          type="button"
          variant="ghost"
          onClick={() => onChange(m)}
          className={cn(
            'relative z-10 h-auto flex-1 rounded-full bg-transparent px-6 py-2.5 text-sm font-medium shadow-none transition-colors duration-150 hover:bg-transparent',
            mode === m ? 'text-white hover:text-white' : 'text-white/35 hover:text-white'
          )}
        >
          {m === 'session' ? 'Pay per session' : 'Monthly plan'}
        </Button>
      ))}
    </div>
  )
}

function FeatureItem({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mt-0.5 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="8"
          r="8"
          fill={dark ? 'rgba(244,123,102,0.2)' : 'rgba(244,123,102,0.12)'}
        />
        <path
          d="M5 8l2.5 2.5L11 5.5"
          stroke="#f47b66"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={cn('text-sm leading-snug', dark ? 'text-white/65' : 'text-muted-text')}>
        {label}
      </span>
    </li>
  )
}

function PlanCard({ plan, mode }: { plan: Plan; mode: BillingMode }) {
  const featured = !!plan.popular

  return (
    <Card
      className={cn(
        'flex flex-col rounded-2xl p-7',
        featured
          ? 'bg-white shadow-popup md:scale-[1.04] md:z-10'
          : 'border border-white/8 bg-luma-wood-mid'
      )}
    >
      {/* Badge row — reserved height keeps card headers vertically aligned */}
      <div className="mb-5 flex h-[26px] items-center">
        {featured && (
          <Badge variant="default" className="bg-luma-coral/15 text-luma-coral">
            Most popular
          </Badge>
        )}
      </div>

      {/* Plan identity */}
      <p className="text-[11px] font-semibold uppercase tracking-widest text-luma-coral">
        {plan.eyebrow}
      </p>
      <h3
        className={cn(
          'mt-1 font-heading text-2xl font-bold',
          featured ? 'text-main-text' : 'text-white'
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          'mt-1.5 text-sm leading-snug',
          featured ? 'text-muted-text' : 'text-white/50'
        )}
      >
        {plan.tagline}
      </p>

      {/* Price */}
      <div className="mt-7">
        <p
          className={cn(
            'font-heading text-5xl font-bold leading-none',
            featured ? 'text-main-text' : 'text-white'
          )}
        >
          {plan.price[mode]}
        </p>
        <p className={cn('mt-1.5 text-xs', featured ? 'text-muted-text' : 'text-white/40')}>
          {plan.priceNote[mode]}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-7 flex-1 space-y-3.5">
        {plan.features.map((f) => (
          <FeatureItem key={f} label={f} dark={!featured} />
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant="default"
        size="md"
        className={cn(
          'mt-8 w-full',
          !featured && 'bg-white/10 text-white shadow-none hover:bg-white/20'
        )}
      >
        <a href={sectionHref(SECTION_IDS.CONTACT)}>{plan.cta}</a>
      </Button>
    </Card>
  )
}

export function PricingClient() {
  const [mode, setMode] = useState<BillingMode>('monthly')

  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <BillingToggle mode={mode} onChange={setMode} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-center">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} mode={mode} />
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-white/30">No hidden fees. Cancel anytime.</p>
    </div>
  )
}
