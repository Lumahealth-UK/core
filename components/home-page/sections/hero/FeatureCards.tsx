import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { cn } from '@/lib/utils'

const moods = ['😞', '😕', '😐', '🙂', '😄'] as const

function TherapistPreviewCard() {
  return (
    <div className="hero-card-main absolute left-1/2 top-2 z-10 w-[290px] -translate-x-1/2 rounded-[2rem] border border-luma-hairline bg-white p-5 shadow-popup transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-luma-coral-tint text-3xl">
        👩‍⚕️
      </div>

      <h3 className="mt-4 font-heading text-lg font-bold leading-tight text-luma-mocha">
        Student therapist match
      </h3>
      <p className="mt-1 text-sm font-medium text-luma-mocha/55">
        BACP Accredited · CBT &amp; Mindfulness
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-luma-coral-tint px-3 py-1 text-xs font-semibold text-luma-coral-deep">
          Anxiety
        </span>
        <span className="rounded-full bg-luma-coral-tint px-3 py-1 text-xs font-semibold text-luma-coral-deep">
          Exam stress
        </span>
        <span className="rounded-full bg-luma-sage-soft px-3 py-1 text-xs font-semibold text-luma-sage-deep">
          Same-week slots
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-luma-canvas px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-luma-mocha/50">
          Your match score
        </span>
        <span className="font-heading text-2xl font-bold text-luma-coral">96%</span>
      </div>

      <WaitlistRoleDialog
        triggerLabel="I'm interested - £32"
        triggerSize="md"
        triggerClassName="mt-4 w-full"
      />
    </div>
  )
}

function StatCard() {
  return (
    <div className="absolute bottom-8 left-0 z-20 w-[215px] -rotate-3 rounded-[1.65rem] border border-luma-hairline bg-white p-5 shadow-popup transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-luma-sage-soft text-2xl">
          🏆
        </div>
        <div>
          <p className="font-heading text-3xl font-bold leading-none text-luma-coral">1 in 5</p>
          <p className="mt-1 text-xs leading-snug text-luma-mocha/60">
            UK undergraduates reported a mental health challenge in 2024
          </p>
        </div>
      </div>
    </div>
  )
}

function MoodCard() {
  return (
    <div className="absolute bottom-0 right-0 z-20 w-[230px] rotate-2 rounded-[1.65rem] border border-luma-hairline bg-white p-5 shadow-popup transition-transform duration-300 hover:-translate-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-luma-mocha/50">
        How are you today?
      </p>
      <div className="mt-4 flex items-center justify-between gap-2" aria-hidden="true">
        {moods.map((mood, index) => (
          <div
            key={mood}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full text-lg transition-transform duration-200',
              index === 2
                ? 'scale-110 bg-luma-coral text-white shadow-[0_8px_18px_rgba(244,123,102,0.28)]'
                : 'bg-luma-canvas'
            )}
          >
            {mood}
          </div>
        ))}
      </div>
    </div>
  )
}

export function FeatureCards() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[560px] animate-reveal-up [animation-fill-mode:both]">
      <TherapistPreviewCard />
      <StatCard />
      <MoodCard />
    </div>
  )
}
