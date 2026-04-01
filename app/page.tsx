import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CrisisBar } from '@/components/sections/crisis-bar/CrisisBar'

// Sections — top to bottom as they appear on the page
import { Hero } from '@/components/sections/hero/Hero'
import { MarqueeSection } from '@/components/sections/marquee/MarqueeSection'
import { LogoCloud } from '@/components/sections/logo-cloud/LogoCloud'
import { HowItWorks } from '@/components/sections/how-it-works/HowItWorks'
import { StudentStories } from '@/components/sections/student-stories/StudentStories'
import { OurStory } from '@/components/sections/our-story/OurStory'
import { Evidence } from '@/components/sections/evidence/Evidence'
import { Pricing } from '@/components/sections/pricing/Pricing'
import { Therapists } from '@/components/sections/therapists/Therapists'
import { Founders } from '@/components/sections/founders/Founders'
import { Faq } from '@/components/sections/faq/Faq'
import { BlogPreview } from '@/components/sections/blog-preview/BlogPreview'
import { SECTION_IDS } from '@/lib/constants/routes'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="pb-12">
        <Hero />
        <MarqueeSection />
        <LogoCloud />
        <HowItWorks />
        <Therapists />
        <Pricing />
        <OurStory />
        <Faq />
        <BlogPreview />
        <StudentStories />
        <Evidence />
        <Founders />
        {/* Scroll target for “For Therapists” — replace with a dedicated section when ready */}
        <div
          id={SECTION_IDS.FOR_THERAPISTS}
          className="scroll-mt-28 h-px w-full max-w-6xl mx-auto opacity-0 pointer-events-none"
          aria-hidden
        />
      </main>
      <Footer />
      <CrisisBar />
    </>
  )
}
