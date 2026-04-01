'use client'

import { motion, useAnimationControls, useInView, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { type Step } from './how-it-works-data'

interface Props {
  steps: Step[]
}

interface TimelineStepProps {
  step: Step
  index: number
  isActive: boolean
  isCurrent: boolean
}

const STEP_TRAVEL_DURATION = 1.25
const STEP_PAUSE_MS = 420
const LOOP_RESET_PAUSE_MS = 120
const LINE_INSET_PERCENT = 12.5
const STREAK_HALF_WIDTH_PX = 48

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

function getStepPoint(index: number, count: number) {
  if (count <= 1) {
    return 50
  }
  const usableWidth = 100 - LINE_INSET_PERCENT * 2
  return LINE_INSET_PERCENT + (index * usableWidth) / (count - 1)
}

function TimelineStep({ step, index, isActive, isCurrent }: TimelineStepProps) {
  const stepStyle = { '--indie-step-rgb': step.accentRgb } as CSSProperties

  return (
    <li className="relative flex flex-col">
      {/* 1) Timeline node area */}
      <div className="relative z-20 flex h-14 items-center justify-center" style={stepStyle}>
        <motion.span
          className={cn(
            'indie-step-pill relative inline-flex items-center rounded-full border px-4 py-1.5',
            'text-[11px] font-semibold uppercase tracking-[0.19em] text-main-text',
            'backdrop-blur-[2px]'
          )}
          style={{
            borderColor: `rgb(${step.accentRgb} / ${isActive ? '0.52' : '0.32'})`,
            backgroundColor: `rgb(${step.accentRgb} / ${isActive ? '0.2' : '0.1'})`,
            boxShadow: isActive
              ? `0 8px 20px rgb(${step.accentRgb} / 0.24), 0 0 0 1px rgb(${step.accentRgb} / 0.32)`
              : `0 4px 10px rgb(${step.accentRgb} / 0.12), 0 0 0 1px rgb(${step.accentRgb} / 0.2)`,
          }}
          animate={{ scale: isCurrent ? 1.05 : isActive ? 1.02 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span
            className="mr-2 h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: `rgb(${step.accentRgb} / 0.95)` }}
            aria-hidden="true"
          />
          Step {index + 1}
        </motion.span>
      </div>

      {/* 2) Vertical connector */}
      <div className="relative z-10 hidden justify-center pb-6 lg:flex">
        <span
          className="h-8 w-px"
          style={{ backgroundColor: isActive ? `rgb(${step.accentRgb} / 0.45)` : 'rgb(0 0 0 / 0.08)' }}
          aria-hidden="true"
        />
      </div>

      {/* 3) Card */}
      <motion.article
        className={cn(
          'group relative min-h-80 rounded-[1.8rem] border border-luma-hairline p-6 md:p-7',
          'bg-[radial-gradient(120%_90%_at_12%_0%,rgba(244,123,102,0.07)_0%,rgba(244,123,102,0)_42%),linear-gradient(180deg,#ffffff_0%,#f7f4ef_100%)]',
          'shadow-popup will-change-transform',
          'transition-transform duration-300 ease-out hover:-translate-y-1.5'
        )}
        style={stepStyle}
        animate={{
          borderColor: isActive ? 'rgba(244, 123, 102, 0.28)' : 'rgba(0, 0, 0, 0.07)',
          boxShadow: isActive
            ? '0 10px 26px rgba(244,123,102,0.16), 0 2px 8px rgba(0,0,0,0.06)'
            : '0 8px 24px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)',
          y: isCurrent ? -3 : 0,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full border border-luma-hairline bg-beige px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-text">
            {step.label}
          </span>
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-luma-hairline text-lg"
            style={{
              backgroundColor: 'rgba(244,123,102,0.12)',
              boxShadow: '0 0 0 1px rgba(244,123,102,0.14), 0 8px 20px rgba(244,123,102,0.16)',
            }}
            role="img"
            aria-hidden="true"
          >
            {step.icon}
          </span>
        </div>

        <div className="mt-8 space-y-3">
          <h3 className="text-4xl font-bold leading-[1.05] tracking-tight text-main-text">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-text">{step.description}</p>
        </div>
      </motion.article>
    </li>
  )
}

export function HowItWorksClient({ steps }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const streakControls = useAnimationControls()
  const orbControls = useAnimationControls()
  const [activeStepIndex, setActiveStepIndex] = useState(-1)

  useEffect(() => {
    if (steps.length === 0) {
      return
    }

    if (prefersReducedMotion) {
      setActiveStepIndex(steps.length - 1)
      void streakControls.set({ opacity: 0 })
      void orbControls.set({ opacity: 0 })
      return
    }

    if (!inView) {
      return
    }

    let cancelled = false

    const runSequence = async () => {
      while (!cancelled) {
        const firstPoint = getStepPoint(0, steps.length)
        await Promise.all([
          streakControls.set({
            left: `calc(${firstPoint}% - ${STREAK_HALF_WIDTH_PX}px)`,
            opacity: 0,
          }),
          orbControls.set({
            left: `calc(${firstPoint}% - 10px)`,
            opacity: 0,
            scale: 0.9,
          }),
        ])

        await Promise.all([
          streakControls.start({
            opacity: 0.95,
            transition: { duration: 0.2, ease: 'easeOut' },
          }),
          orbControls.start({
            opacity: 0.95,
            scale: 1,
            transition: { duration: 0.2, ease: 'easeOut' },
          }),
        ])

        setActiveStepIndex(0)
        await sleep(STEP_PAUSE_MS)

        for (let index = 1; index < steps.length; index += 1) {
          const stepPoint = getStepPoint(index, steps.length)

          await Promise.all([
            streakControls.start({
              left: `calc(${stepPoint}% - ${STREAK_HALF_WIDTH_PX}px)`,
              opacity: 1,
              transition: { duration: STEP_TRAVEL_DURATION, ease: [0.22, 1, 0.36, 1] },
            }),
            orbControls.start({
              left: `calc(${stepPoint}% - 10px)`,
              opacity: 1,
              scale: 1.05,
              transition: { duration: STEP_TRAVEL_DURATION, ease: [0.22, 1, 0.36, 1] },
            }),
          ])

          if (cancelled) {
            return
          }

          setActiveStepIndex(index)
          await sleep(STEP_PAUSE_MS)
        }

        await sleep(STEP_PAUSE_MS)
        await sleep(LOOP_RESET_PAUSE_MS)
      }
    }

    void runSequence()

    return () => {
      cancelled = true
    }
  }, [inView, streakControls, orbControls, prefersReducedMotion, steps])

  return (
    <div ref={ref} className="mt-14">
      <div className="relative">
        <div
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-1 -translate-y-1/2 rounded-full bg-luma-hairline/70 lg:block"
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute top-7 hidden h-1.5 w-24 -translate-y-1/2 rounded-full bg-gradient-to-r from-luma-coral/0 via-luma-coral to-luma-coral/0 lg:block"
          initial={{ opacity: 0, left: `calc(12.5% - ${STREAK_HALF_WIDTH_PX}px)` }}
          animate={streakControls}
          style={{ filter: 'drop-shadow(0 0 10px rgba(244,123,102,0.6))' }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute top-7 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-luma-coral lg:block"
          initial={{ opacity: 0, scale: 0.9, left: 'calc(12.5% - 10px)' }}
          animate={orbControls}
          style={{
            boxShadow: '0 0 20px rgba(244,123,102,0.7), 0 0 34px rgba(244,123,102,0.45)',
          }}
          aria-hidden="true"
        />

        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.title}
              step={step}
              index={index}
              isActive={index <= activeStepIndex}
              isCurrent={index === activeStepIndex}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}
