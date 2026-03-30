import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small uppercase label above the title */
  eyebrow?: string
  /** Main heading — pass a string or JSX with <span> for accent colour */
  title: React.ReactNode
  /** Optional subtitle / description */
  description?: string
  /** Centre-align everything (default: false — left aligned) */
  centered?: boolean
  className?: string
}

/**
 * Reusable section header: eyebrow pill → heading → description.
 * Use `title` as JSX to add coral accent spans, e.g.:
 *   title={<>Why <span className="text-luma-coral">Luma</span></>}
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-3', centered && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-beige px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-luma-coral">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight text-main-text md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn('text-lg text-muted-text', centered && 'mx-auto max-w-2xl')}>
          {description}
        </p>
      )}
    </div>
  )
}
