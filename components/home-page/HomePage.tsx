import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CrisisBar } from '@/components/home-page/sections/CrisisBar'
import { Hero } from '@/components/home-page/sections/hero/Hero'
import { MarqueeSection } from '@/components/home-page/sections/MarqueeSection'
import { LogoCloud } from '@/components/home-page/sections/LogoCloud'
import { HowItWorks } from '@/components/home-page/sections/how-it-works/HowItWorks'
import { StudentStories } from '@/components/home-page/sections/student-stories/StudentStories'
import { Evidence } from '@/components/home-page/sections/evidence/Evidence'
import { Pricing } from '@/components/home-page/sections/pricing/Pricing'
import { Therapists } from '@/components/home-page/sections/therapists/Therapists'
import { BlogPreview } from '@/components/home-page/sections/blog-preview/BlogPreview'
import { CtaSection } from '@/components/home-page/sections/CtaSection'
import { FaqSection } from '@/components/home-page/sections/FaqSection'
import { ForTherapistsSection } from '@/components/home-page/sections/ForTherapistsSection'
import { StorySection } from '@/components/home-page/sections/StorySection'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <LogoCloud />
        <HowItWorks />
        <Therapists />
        <Evidence />
        <Pricing />
        <StudentStories />
        <StorySection />
        <FaqSection />
        <BlogPreview />
        <ForTherapistsSection />
        <CtaSection />
      </main>
      <Footer />
      <CrisisBar />
    </>
  )
}
