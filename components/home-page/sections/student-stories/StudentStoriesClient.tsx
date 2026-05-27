'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type Testimonial } from './student-stories-data'

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
      className="flex flex-col justify-between rounded-3xl border border-luma-hairline bg-beige p-7 min-h-72"
      initial={reduced ? false : { x: -24 }}
      whileInView={reduced ? undefined : { x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={reduced ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-luma-coral">
          What students need
        </p>
        <span
          className="block font-heading text-5xl leading-none text-luma-coral"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="text-sm leading-relaxed italic text-luma-mocha/80">
          {t.quote}
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar initials={t.initials} color={t.avatarColor} />
        <div>
          <p className="text-sm font-semibold text-luma-mocha">{t.name}</p>
          <p className="text-xs text-luma-mocha/55">
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-luma-coral">
          Student expectation
        </p>
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
          <RegularCard key={`${t.subject}-${t.year}`} t={t} index={i} reduced={reduced} />
        ))}
      </div>
    </div>
  )
}
