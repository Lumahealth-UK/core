/**
 * Footer component.
 * Used across all marketing pages.
 * Contains links, copyright, and contact information.
 */
import Link from 'next/link'
import { Instagram, Linkedin, Music } from 'lucide-react'
import { SITE_NAME } from '@/lib/constants/site'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { Section } from '@/components/primitives/Section'

type SocialIconKey = 'Instagram' | 'LinkedIn' | 'TikTok'

const CONTACT_ADDRESS = 'London'
const CONTACT_COUNTRY = 'United Kingdom'

const companyLinks = [
  { label: 'How it works', href: sectionHref(SECTION_IDS.HOW_IT_WORKS) },
  { label: 'Therapists', href: sectionHref(SECTION_IDS.THERAPISTS) },
  { label: 'Our story', href: sectionHref(SECTION_IDS.OUR_STORY) },
] as const

const supportLinks = [
  { label: 'FAQ', href: sectionHref(SECTION_IDS.FAQ) },
  { label: 'Blog', href: sectionHref(SECTION_IDS.BLOG) },
  { label: 'For Therapists', href: sectionHref(SECTION_IDS.FOR_THERAPISTS) },
] as const

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'Instagram' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'LinkedIn' as const },
  { label: 'TikTok', href: 'https://www.tiktok.com', icon: 'TikTok' as const },
] as const

const socialIcons: Record<SocialIconKey, typeof Instagram> = {
  Instagram,
  LinkedIn: Linkedin,
  TikTok: Music,
}

export function Footer() {
  return (
    <footer
      id={SECTION_IDS.CONTACT}
      className="relative overflow-hidden scroll-mt-24 bg-beige text-luma-mocha"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-16 w-full text-white"
        aria-hidden="true"
      >
        <path
          d="M0,0 L1440,0 L1440,42 C1080,72 360,18 0,52 Z"
          fill="currentColor"
        />
      </svg>

      <Section className="relative pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Luma Health UK home">
              <span
                className="block h-20 w-20 bg-luma-coral"
                style={{
                  WebkitMask: 'url(/icons/logo.png) center / contain no-repeat',
                  mask: 'url(/icons/logo.png) center / contain no-repeat',
                }}
                aria-hidden="true"
              />
            </Link>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-luma-mocha">
              Luma Health
            </h3>
            <p className="text-sm md:text-base text-luma-mocha/65 leading-relaxed max-w-xs">
              Supporting mental wellbeing for UK university students with accessible, professional therapy services.
            </p>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-luma-mocha uppercase tracking-wider mb-4 md:mb-6">
              Company
            </h4>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-luma-mocha/65 hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-luma-mocha uppercase tracking-wider mb-4 md:mb-6">
              Support
            </h4>
            <nav className="flex flex-col space-y-3 mb-6 md:mb-8">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-luma-mocha/65 hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <h4 className="font-heading text-sm font-semibold text-luma-mocha uppercase tracking-wider mb-4">
                Contact
              </h4>
              <address className="not-italic text-sm md:text-base text-luma-mocha/65 space-y-1">
                <div>{SITE_NAME}</div>
                <div>{CONTACT_ADDRESS}</div>
                <div>{CONTACT_COUNTRY}</div>
              </address>
            </div>
          </div>

          {/* Social Media & Emergency Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-luma-mocha uppercase tracking-wider mb-4 md:mb-6">
              Follow Us
            </h4>
            <div className="flex items-center space-x-4 mb-8 md:mb-10">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-luma-hairline bg-white text-luma-mocha/60 hover:bg-luma-coral hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )
              })}
            </div>

            {/* Emergency Support */}
            <div className="rounded-lg border border-luma-hairline bg-white p-4 md:p-5">
              <h4 className="font-heading text-sm font-semibold text-luma-mocha mb-2">
                Emergency Support
              </h4>
              <p className="text-xs md:text-sm text-luma-mocha/65 mb-3">
                If you need urgent help:
              </p>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="text-luma-mocha/75">
                  <span className="font-semibold">999</span> – Emergency services
                </p>
                <p className="text-luma-mocha/75">
                  <a
                    href="https://www.nhs.uk/urgentmentalhealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luma-coral hover:underline"
                  >
                    NHS Urgent Mental Health
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luma-hairline pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-luma-mocha/55">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs md:text-sm">
              <Link
                href="#"
                className="text-luma-mocha/55 hover:text-luma-coral transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-luma-mocha/55 hover:text-luma-coral transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-luma-mocha/55 hover:text-luma-coral transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
