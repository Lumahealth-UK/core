import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  /** Extra classes on the outer <section> (e.g. bg-beige) */
  className?: string
  /** Extra classes on the inner max-width container */
  containerClassName?: string
  children: React.ReactNode
}

/**
 * Consistent vertical padding + centred max-width container.
 * Pass `id` for anchor navigation (/#section-id).
 */
export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className={cn('mx-auto max-w-6xl px-6', containerClassName)}>{children}</div>
    </section>
  )
}
