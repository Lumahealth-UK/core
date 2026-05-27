import { cn } from '@/lib/utils'

/**
 * CSS color for a wave layer — accepts any valid CSS color value,
 * including hex strings and CSS custom properties (e.g. 'var(--color-beige)').
 */
interface WaveColors {
  /** Color of the main (front) wave — typically the adjacent section's background */
  front: string
  /** Optional back wave for a layered depth effect — typically a shade of this section */
  back?: string
}

interface WaveSectionProps {
  id?: string
  /** Extra classes on the inner <section> (e.g. bg-luma-espresso) */
  className?: string
  /** Extra classes on the inner max-width container */
  containerClassName?: string
  /** Wave rendered at the top edge of the section */
  topWave?: WaveColors
  /** Wave rendered at the bottom edge of the section */
  bottomWave?: WaveColors
  children: React.ReactNode
}

/** SVG path constants — viewBox "0 0 1440 80" */
const PATHS = {
  top: {
    front: 'M0,48 C360,14 1080,62 1440,44 L1440,0 L0,0 Z',
    back:  'M0,62 C360,28 1080,76 1440,58 L1440,0 L0,0 Z',
  },
  bottom: {
    front: 'M0,32 C360,68 1080,18 1440,36 L1440,80 L0,80 Z',
    back:  'M0,18 C360,52 1080,4  1440,22 L1440,80 L0,80 Z',
  },
}

function WaveSvg({
  path,
  color,
  position,
  depth,
}: {
  path: string
  color: string
  position: 'top' | 'bottom'
  depth: 'front' | 'back'
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn(
        'absolute left-0 h-20 w-full',
        position === 'top' ? 'top-0' : 'bottom-0',
        depth === 'back' ? 'z-[5]' : 'z-10',
      )}
      aria-hidden="true"
    >
      <path d={path} fill={color} />
    </svg>
  )
}

/**
 * Drop-in replacement for `Section` that adds optional wavy top/bottom edges.
 * Defaults to `py-24 md:py-32` to give the 80 px waves room inside the padding.
 *
 * @example
 * <WaveSection
 *   id={SECTION_IDS.THERAPISTS}
 *   className="bg-luma-espresso"
 *   containerClassName="max-w-screen-xl w-full"
 *   topWave={{ front: 'white', back: 'var(--color-luma-mocha)' }}
 *   bottomWave={{ front: 'var(--color-beige)', back: 'var(--color-luma-mocha)' }}
 * >
 */
export function WaveSection({
  id,
  className,
  containerClassName,
  topWave,
  bottomWave,
  children,
}: WaveSectionProps) {
  return (
    <div className="relative">
      {topWave?.back && (
        <WaveSvg path={PATHS.top.back} color={topWave.back} position="top" depth="back" />
      )}
      {topWave && (
        <WaveSvg path={PATHS.top.front} color={topWave.front} position="top" depth="front" />
      )}

      <section id={id} className={cn('scroll-mt-28 py-24 md:py-32', className)}>
        <div className={cn('mx-auto max-w-screen-xl px-6', containerClassName)}>
          {children}
        </div>
      </section>

      {bottomWave?.back && (
        <WaveSvg path={PATHS.bottom.back} color={bottomWave.back} position="bottom" depth="back" />
      )}
      {bottomWave && (
        <WaveSvg path={PATHS.bottom.front} color={bottomWave.front} position="bottom" depth="front" />
      )}
    </div>
  )
}
