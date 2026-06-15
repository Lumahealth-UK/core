import { EyeOff, HeartPulse, LockKeyhole, ShieldCheck } from 'lucide-react'
import { WaveSection } from '@/components/primitives/WaveSection'
import { SectionHeader } from '@/components/primitives/SectionHeader'
import { SECTION_IDS } from '@/lib/constants'

const safeguards = [
  {
    title: 'Accredited therapists',
    description:
      'Luma is designed around qualified, accredited professionals, not unverified advice.',
    Icon: ShieldCheck,
  },
  {
    title: 'Private from your university',
    description:
      'Your university should not see your sessions, notes, or what you choose to share.',
    Icon: EyeOff,
  },
  {
    title: 'Secure by design',
    description:
      'Privacy, consent, and careful handling of personal information are product requirements.',
    Icon: LockKeyhole,
  },
  {
    title: 'Clear crisis boundaries',
    description:
      'Luma is not a crisis service, so urgent support routes stay visible and easy to find.',
    Icon: HeartPulse,
  },
] as const

export function TrustSafetySection() {
  return (
    <WaveSection
      id={SECTION_IDS.TRUST_SAFETY}
      className="bg-beige"
      topWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
      bottomWave={{ front: 'white', back: 'var(--color-luma-canvas)' }}
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <SectionHeader
          eyebrow="Trust & safety"
          title={
            <>
              Built for sensitive conversations, not just{' '}
              <span className="text-luma-coral">smooth sign-up flows.</span>
            </>
          }
          description="Students need to know what happens to their information, who they are speaking to, and where to go if they need urgent help. This belongs in the product from day one."
          className="[&_p]:max-w-xl"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {safeguards.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-3xl border border-luma-hairline bg-white p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-luma-sage-soft text-luma-sage-deep">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold leading-tight text-luma-mocha">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-luma-mocha/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </WaveSection>
  )
}
