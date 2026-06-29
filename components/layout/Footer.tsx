/**
 * Footer component.
 * Used across all marketing pages.
 * Contains links, copyright, and contact information.
 */
import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'
import { SECTION_IDS, SITE_NAME, sectionHref } from '@/lib/constants'
import { Section } from '@/components/primitives/Section'

type SocialIconKey = 'Instagram' | 'LinkedIn'

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
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
] as const

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'Instagram' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'LinkedIn' as const },
] as const

const socialIcons: Record<SocialIconKey, typeof Instagram> = {
  Instagram,
  LinkedIn: Linkedin,
}

export function Footer() {
  return (
    <footer
      id={SECTION_IDS.CONTACT}
      className="relative overflow-hidden scroll-mt-24 bg-[#251d18] text-white"
    >
      <Section className="relative pb-16 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
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
            <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
              Luma Health
            </h3>
            <p className="text-sm md:text-base text-white/58 leading-relaxed max-w-xs">
              Supporting mental wellbeing for UK university students with accessible, professional
              therapy services.
            </p>
            <div className="flex items-center space-x-3 pt-1">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-luma-coral hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4 md:mb-6">
              Company
            </h4>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-white/58 hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Links Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4 md:mb-6">
              Support
            </h4>
            <nav className="flex flex-col space-y-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm md:text-base text-white/58 hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4 md:mb-6">
              Contact
            </h4>
            <address className="not-italic text-sm md:text-base text-white/58 space-y-2">
              <div>{SITE_NAME}</div>
              <div>{CONTACT_ADDRESS}</div>
              <div>{CONTACT_COUNTRY}</div>
            </address>

            {/* Emergency Support */}
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 md:p-5">
              <h4 className="font-heading text-sm font-semibold text-white mb-2">
                Emergency Support
              </h4>
              <p className="text-xs md:text-sm text-white/58 mb-3">If you need urgent help:</p>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="text-white/70">
                  <span className="font-semibold">999</span> – Emergency services
                </p>
                <p className="text-white/70">
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
        <div className="border-t border-white/10 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-white/45">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs md:text-sm">
              <Link
                href="#"
                className="text-white/45 hover:text-luma-coral transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/45 hover:text-luma-coral transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
