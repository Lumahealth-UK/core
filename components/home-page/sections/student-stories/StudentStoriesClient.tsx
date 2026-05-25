'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type Testimonial } from './student-stories-data'

function Stars({ rating, light = false }: { rating: number; light?: boolean }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < rating
              ? 'text-luma-coral'
              : light
                ? 'text-white/20'
                : 'text-luma-coral/30'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white"
      style={{ background: color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function FeaturedCard({ t, reduced }: { t: Testimonial; reduced: boolean }) {
  return (
    <motion.figure
      className="flex flex-col justify-between rounded-3xl p-7 min-h-72 bg-luma-espresso"
      initial={reduced ? false : { x: -24 }}
      whileInView={reduced ? undefined : { x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={reduced ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="space-y-3">
        <Stars rating={t.rating} light />
        <span
          className="block font-heading text-5xl leading-none text-luma-coral"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="text-sm leading-relaxed italic text-white/85">
          {t.quote}
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar initials={t.initials} color={t.avatarColor} />
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-white/55">
            {t.subject} · {t.university} · {t.year}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  )
}

function RegularCard({ t, index, reduced }: { t: Testimonial; index: number; reduced: boolean }) {
  return (
    <motion.figure
      className="flex flex-col justify-between rounded-3xl border border-luma-hairline bg-white p-6 shadow-card"
      initial={reduced ? false : { y: 20 }}
      whileInView={reduced ? undefined : { y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 + index * 0.1 }
      }
    >
      <div className="space-y-3">
        <Stars rating={t.rating} />
        <span
          className="block font-heading text-4xl leading-none text-luma-coral"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="text-sm leading-relaxed italic text-main-text">
          {t.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar initials={t.initials} color={t.avatarColor} />
        <div>
          <p className="text-sm font-semibold text-main-text">{t.name}</p>
          <p className="text-xs text-muted-text">
            {t.subject} · {t.university} · {t.year}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  )
}

export function StudentStoriesClient({ testimonials }: { testimonials: Testimonial[] }) {
  const reduced = useReducedMotion() ?? false
  const [featured, ...rest] = testimonials

  if (!featured) return null

  return (
    <div className="mt-14 grid gap-4 lg:grid-cols-[2fr_3fr]">
      <FeaturedCard t={featured} reduced={reduced} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 content-start">
        {rest.map((t, i) => (
          <RegularCard key={t.name} t={t} index={i} reduced={reduced} />
        ))}
      </div>
    </div>
  )
}
