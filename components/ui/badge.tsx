import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full font-semibold',
  {
    variants: {
      variant: {
        /** Generic pill — pass bg/text colors via className */
        default: 'px-2.5 py-0.5 text-xs',
        /** Section eyebrow label (coral on beige) */
        eyebrow: 'bg-beige px-4 py-1.5 text-xs uppercase tracking-widest text-luma-coral',
        /** Bordered pill on white with card shadow (hero announcement etc.) */
        outline: 'border border-luma-hairline bg-white px-4 py-2 text-xs text-main-text shadow-card',
        /** Small step/card label (muted, beige bg) */
        label:
          'border border-luma-hairline bg-beige px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
