import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { WaitlistActions } from './WaitlistActions'

interface WaitlistPageProps {
  searchParams?: Promise<{
    ref?: string | string[]
  }>
}

export default async function WaitlistPage({ searchParams }: WaitlistPageProps) {
  const params = await searchParams
  const referralCode = Array.isArray(params?.ref) ? params.ref[0] : params?.ref

  return (
    <>
      <Navbar />
      <main className="relative -mt-44 min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(244,123,102,0.18),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(139,175,139,0.22),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff6f1_48%,var(--color-luma-canvas)_100%)] px-6 pb-28 pt-56">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <section className="grid max-w-2xl gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-luma-coral/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-luma-coral shadow-sm">
              <span aria-hidden="true">✦</span>
              Friend referral
            </div>

            <div className="grid gap-5">
              <h1 className="font-heading text-4xl font-bold leading-[1.05] text-main-text sm:text-5xl md:text-6xl">
                Your friend thinks
                <br />
                Luma might <em className="italic text-luma-coral">actually help.</em>
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-text sm:text-lg">
                Join the student waitlist and we&apos;ll send your own referral link. When bookings
                open, you and your friend can each get £5 off your first session.
              </p>
            </div>

            <WaitlistActions autoOpen={Boolean(referralCode)} />
          </section>

          <aside className="rounded-[2rem] border border-luma-hairline bg-white p-6 shadow-popup">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-luma-coral-tint text-3xl">
              ✉️
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-luma-mocha">
              A calmer route to support
            </h2>
            <div className="mt-5 grid gap-3 text-sm font-medium text-luma-mocha/70">
              <p className="rounded-2xl bg-luma-canvas px-4 py-3">No GP referral needed</p>
              <p className="rounded-2xl bg-luma-coral-tint px-4 py-3 text-luma-coral-deep">
                Sessions from £32
              </p>
              <p className="rounded-2xl bg-luma-sage-soft px-4 py-3 text-luma-sage-deep">
                Matched with vetted therapists
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
