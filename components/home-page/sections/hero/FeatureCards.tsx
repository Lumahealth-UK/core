import Image from 'next/image'
import {
  CalendarCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { cn } from '@/lib/utils'

const statCards: {
  icon: LucideIcon
  label: string
  value: string
  className: string
  animationClassName: string
  tone: 'coral' | 'sage' | 'canvas'
}[] = [
  {
    icon: ShieldCheck,
    label: 'BACP accredited',
    value: 'Vetted therapists',
    className: '-left-4 top-12 xl:-left-10',
    animationClassName: 'animate-float-vertical [animation-duration:5.2s]',
    tone: 'sage',
  },
  {
    icon: CalendarCheck,
    label: 'No GP referral',
    value: 'Join directly',
    className: '-right-4 top-28 xl:-right-8',
    animationClassName: 'animate-float-vertical [animation-delay:900ms] [animation-duration:5.8s]',
    tone: 'canvas',
  },
  {
    icon: HeartHandshake,
    label: 'Student-aware',
    value: 'Matched support',
    className: 'bottom-8 left-8 xl:left-2',
    animationClassName: 'animate-float-vertical [animation-delay:1500ms] [animation-duration:6.2s]',
    tone: 'coral',
  },
]

const toneClasses = {
  coral: 'bg-luma-coral-tint text-luma-coral-deep',
  sage: 'bg-luma-sage-soft text-luma-sage-deep',
  canvas: 'bg-luma-canvas text-luma-mocha',
} satisfies Record<(typeof statCards)[number]['tone'], string>

function FloatingStatCard({
  icon: Icon,
  label,
  value,
  className,
  animationClassName,
  tone,
}: (typeof statCards)[number]) {
  return (
    <div
      className={cn(
        'absolute z-20 w-[190px] rounded-2xl border border-luma-hairline bg-white/92 p-4 shadow-popup backdrop-blur-xl',
        animationClassName,
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl', toneClasses[tone])}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-heading text-lg font-bold leading-tight text-luma-mocha">
            {value}
          </span>
          <span className="mt-0.5 block text-xs font-medium leading-5 text-luma-mocha/55">
            {label}
          </span>
        </span>
      </div>
    </div>
  )
}

function MatchCard() {
  return (
    <div className="absolute bottom-3 right-3 z-30 w-[245px] rounded-3xl border border-luma-hairline bg-white/95 p-4 shadow-popup backdrop-blur-xl xl:bottom-10 xl:right-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-luma-coral text-white">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading text-lg font-bold leading-tight text-luma-mocha">96% match</p>
            <p className="text-xs font-medium text-luma-mocha/55">Based on your needs</p>
          </div>
        </div>
      </div>
      <WaitlistRoleDialog
        triggerLabel="I'm interested - £32"
        triggerSize="md"
        triggerClassName="mt-4 w-full"
      />
    </div>
  )
}

export function FeatureCards() {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[620px] animate-reveal-up [animation-fill-mode:both]">
      <div className="absolute inset-x-10 top-14 h-64 rounded-full bg-luma-coral/12 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-luma-sage/15 blur-3xl" />

      <div className="relative mx-auto h-full max-w-[500px]">
        <div className="absolute inset-x-8 top-8 h-[490px] overflow-hidden rounded-[2rem] border border-luma-hairline bg-luma-canvas shadow-popup">
          <Image
            src="/images/hero-session.jpg"
            alt="A student speaking with a therapist in a warm therapy room"
            fill
            priority
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luma-mocha/18 via-transparent to-transparent" />
        </div>

        {statCards.map((card) => (
          <FloatingStatCard key={card.value} {...card} />
        ))}
        <MatchCard />
      </div>
    </div>
  )
}
