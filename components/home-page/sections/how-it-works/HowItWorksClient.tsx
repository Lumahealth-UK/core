'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
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

const STEP_DWELL_MS = 1400
const LOOP_RESET_PAUSE_MS = 600
const LINE_INSET_PERCENT = 12.5

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

function getStepPoint(index: number, count: number) {
  if (count <= 1) return 50
  const usableWidth = 100 - LINE_INSET_PERCENT * 2
  return LINE_INSET_PERCENT + (index * usableWidth) / (count - 1)
}

function TimelineStep({ step, index, isActive, isCurrent }: TimelineStepProps) {
  return (
    <li className="relative flex flex-col">
      {/* Timeline node */}
      <div className="relative z-20 flex h-14 items-center justify-center">
        <motion.span
          className={cn(
            'indie-step-pill relative inline-flex items-center rounded-full border px-4 py-1.5',
            'text-[11px] font-semibold uppercase tracking-[0.19em] text-main-text',
            'backdrop-blur-[2px]'
          )}
          animate={{ scale: isCurrent ? 1.05 : isActive ? 1.02 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-luma-coral" aria-hidden="true" />
          Step {index + 1}
        </motion.span>
      </div>

      {/* Vertical connector */}
      <div className="relative z-10 hidden justify-center pb-6 lg:flex">
        <span
          className={cn(
            'h-8 w-px transition-colors duration-300',
            isActive ? 'bg-luma-coral/30' : 'bg-luma-hairline'
          )}
          aria-hidden="true"
        />
      </div>

      {/* Card */}
      <motion.article
        className={cn(
          'group relative min-h-80 rounded-[1.8rem] border p-6 md:p-7',
          'bg-gradient-to-b from-background to-luma-canvas',
          'shadow-popup will-change-transform',
          'transition-colors duration-300',
          isActive ? 'border-luma-coral/20' : 'border-luma-hairline'
        )}
        animate={{ y: isCurrent ? -8 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-3">
          <Badge variant="label">{step.label}</Badge>
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-luma-hairline bg-luma-canvas"
            aria-hidden="true"
          >
            <Image src={step.icon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
          </span>
        </div>

        <div className="mt-8 space-y-3">
          <h3 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-main-text">{step.title}</h3>
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
  const [activeStepIndex, setActiveStepIndex] = useState(-1)

  useEffect(() => {
    if (steps.length === 0) return

    if (prefersReducedMotion) {
      setActiveStepIndex(steps.length - 1)
      return
    }

    if (!inView) return

    let cancelled = false

    const runSequence = async () => {
      while (!cancelled) {
        for (let i = 0; i < steps.length; i += 1) {
          setActiveStepIndex(i)
          await sleep(STEP_DWELL_MS)
          if (cancelled) return
        }
        setActiveStepIndex(-1)
        await sleep(LOOP_RESET_PAUSE_MS)
      }
    }

    void runSequence()

    return () => {
      cancelled = true
    }
  }, [inView, prefersReducedMotion, steps])

  return (
    <div ref={ref} className="mt-14">
      <div className="relative">
        <div
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-[3px] -translate-y-1/2 rounded-full bg-luma-hairline lg:block"
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute top-7 hidden h-[3px] -translate-y-1/2 rounded-full lg:block"
          style={{
            left: '12.5%',
            background: 'linear-gradient(to right, var(--luma-coral-deep), var(--luma-coral), var(--luma-coral-light))',
            boxShadow: '0 1px 4px color-mix(in srgb, var(--luma-coral) 50%, transparent)',
          }}
          animate={{
            width:
              activeStepIndex < 0
                ? '0%'
                : `${getStepPoint(activeStepIndex, steps.length) - LINE_INSET_PERCENT}%`,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
