import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CrisisBar } from '@/components/home-page/sections/CrisisBar'
import { HeroSection } from '@/components/home-page/sections/hero/HeroSection'
import { MarqueeSection } from '@/components/home-page/sections/MarqueeSection'
import { LogoCloudSection } from '@/components/home-page/sections/LogoCloudSection'
import { WhoItsForSection } from '@/components/home-page/sections/WhoItsForSection'
import { HowItWorksSection } from '@/components/home-page/sections/how-it-works/HowItWorksSection'
import { WhatYouGetSection } from '@/components/home-page/sections/WhatYouGetSection'
import { StudentStoriesSection } from '@/components/home-page/sections/student-stories/StudentStoriesSection'
import { EvidenceSection } from '@/components/home-page/sections/evidence/EvidenceSection'
import { TrustSafetySection } from '@/components/home-page/sections/TrustSafetySection'
// import { PricingSection } from '@/components/home-page/sections/pricing/PricingSection'
import { TherapistsSection } from '@/components/home-page/sections/therapists/TherapistsSection'
import { BlogPreviewSection } from '@/components/home-page/sections/blog-preview/BlogPreviewSection'
import { CtaSection } from '@/components/home-page/sections/CtaSection'
import { FaqSection } from '@/components/home-page/sections/FaqSection'
import { ForTherapistsSection } from '@/components/home-page/sections/ForTherapistsSection'
import { OurStorySection } from '@/components/home-page/sections/OurStorySection'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <LogoCloudSection />
        <WhoItsForSection />
        <HowItWorksSection />
        <WhatYouGetSection />
        <TherapistsSection />
        <EvidenceSection />
        <TrustSafetySection />
        {/* <PricingSection /> */}
        <StudentStoriesSection />
        <OurStorySection />
        <FaqSection />
        <BlogPreviewSection />
        <ForTherapistsSection />
        <CtaSection />
      </main>
      <Footer />
      <CrisisBar />
    </>
  )
}
