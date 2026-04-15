/**
 * Horizontal auto-scrolling text/logo strip.
 * Full-width, no max-width container — uses Section only for vertical rhythm.
 */
export function MarqueeSection() {
  const items = [
    'BACP Accredited',
    'From £25 per session',
    'Same-week appointments',
    'Video & phone sessions',
    'CBT · Mindfulness · ACT',
    'Anxiety & depression',
    'Exam stress',
    'Relationship stress',
    'Loneliness & isolation',
    'Imposter syndrome',
  ]

  return (
    <div className="overflow-hidden bg-luma-mocha py-5">
      <div className="marquee-track gap-12 px-6" style={{ ['--marquee-duration' as string]: '28s' }}>
        {[0, 1].map((group) => (
          <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center gap-12">
            {items.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/55"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-luma-coral" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
