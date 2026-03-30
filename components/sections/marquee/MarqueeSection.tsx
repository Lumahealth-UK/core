/**
 * Horizontal auto-scrolling text/logo strip.
 * Full-width, no max-width container — uses Section only for vertical rhythm.
 */
export function MarqueeSection() {
  const items = [
    'Trusted by students',
    'NHS-aligned pathways',
    'Same-week sessions',
    'Vetted therapists',
    'Secure & confidential',
    'Affordable plans',
  ]

  return (
    <div className="overflow-hidden border-y border-border bg-beige py-5">
      <div className="marquee-track gap-12 px-6">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-main-text"
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-luma-coral" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
