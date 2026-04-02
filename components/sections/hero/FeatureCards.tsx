import { Heart, Calendar, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const CARDS = [
  {
    icon: <Heart className="h-5 w-5" fill="currentColor" />,
    iconClass: 'bg-luma-lilac/20 text-luma-lilac',
    title: 'Matched to your needs',
    description:
      'Paired with BACP-accredited therapists based on your concerns, schedule, and preferences.',
    badge: '96% match score',
    badgeClass: 'bg-luma-lilac/15 text-luma-lilac',
    side: 'left' as const,
    offset: '-ml-2',
    delay: '0ms',
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    iconClass: 'bg-luma-coral-tint text-luma-coral',
    title: 'Book in minutes',
    description:
      'Schedule sessions around lectures and exams — evenings, weekends, whenever suits you.',
    badge: 'From £25 / session',
    badgeClass: 'bg-luma-coral-tint text-luma-coral',
    side: 'right' as const,
    offset: '-mr-2',
    delay: '150ms',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    iconClass: 'bg-luma-sage-soft text-luma-sage-deep',
    title: 'Real results',
    description:
      '97% of students felt better after session 3. Proven outcomes, student-friendly prices.',
    badge: '97% felt better',
    badgeClass: 'bg-luma-sage-soft text-luma-sage-deep',
    side: 'left' as const,
    offset: '-ml-6',
    delay: '300ms',
  },
]

export function FeatureCards() {
  return (
    <div className="relative w-full py-4">
      {/* Decorative background slab */}
      <div className="absolute left-1/2 top-8 z-0 h-[88%] w-[90%] -translate-x-1/2 rounded-3xl bg-luma-canvas/80 shadow-card" />

      <div className="relative z-10 flex flex-col gap-4">
        {CARDS.map(({ icon, iconClass, title, description, badge, badgeClass, side, offset, delay }) => (
          <div
            key={title}
            className={cn(
              'animate-reveal-up [animation-fill-mode:both] w-full max-w-sm',
              side === 'right' ? 'ml-auto' : 'mr-auto',
              offset
            )}
            style={{ animationDelay: delay }}
          >
            <Card className="rounded-2xl border border-luma-hairline bg-white p-5 shadow-popup">
              <div className="flex items-start gap-4">
                <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', iconClass)}>
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug text-main-text">{title}</h3>
                    <Badge className={cn('shrink-0 text-[10px]', badgeClass)}>
                      {badge}
                    </Badge>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-text">{description}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
