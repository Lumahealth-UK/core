/**
 * Footer component.
 * Used across all marketing pages.
 * Contains links, copyright, and contact information.
 */
import Link from 'next/link'
import Image from 'next/image'
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
  { label: 'Pricing', href: sectionHref(SECTION_IDS.PRICING) },
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
    <footer id={SECTION_IDS.CONTACT} className="bg-footer-bg text-footer-fg scroll-mt-24">
      <Section className="py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/icons/logo.png"
                alt="Luma Health UK Logo"
                width={80}
                height={80}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-footer-fg">
              Luma Health
            </h3>
            <p className="text-sm md:text-base text-footer-muted leading-relaxed max-w-xs">
              Supporting mental wellbeing for UK university students with accessible, professional therapy services.
            </p>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-footer-fg uppercase tracking-wider mb-4 md:mb-6">
              Company
            </h4>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-footer-muted hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-footer-fg uppercase tracking-wider mb-4 md:mb-6">
              Support
            </h4>
            <nav className="flex flex-col space-y-3 mb-6 md:mb-8">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm md:text-base text-footer-muted hover:text-luma-coral transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <h4 className="font-heading text-sm font-semibold text-footer-fg uppercase tracking-wider mb-4">
                Contact
              </h4>
              <address className="not-italic text-sm md:text-base text-footer-muted space-y-1">
                <div>{SITE_NAME}</div>
                <div>{CONTACT_ADDRESS}</div>
                <div>{CONTACT_COUNTRY}</div>
              </address>
            </div>
          </div>

          {/* Social Media & Emergency Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-footer-fg uppercase tracking-wider mb-4 md:mb-6">
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
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-footer-icon-bg hover:bg-luma-coral text-footer-muted hover:text-footer-fg transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )
              })}
            </div>

            {/* Emergency Support */}
            <div className="bg-footer-icon-bg/50 rounded-lg p-4 md:p-5 border border-footer-border">
              <h4 className="font-heading text-sm font-semibold text-footer-fg mb-2">
                Emergency Support
              </h4>
              <p className="text-xs md:text-sm text-footer-muted mb-3">
                If you need urgent help:
              </p>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="text-footer-muted-strong">
                  <span className="font-semibold">999</span> – Emergency services
                </p>
                <p className="text-footer-muted-strong">
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
        <div className="border-t border-footer-border pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-footer-copyright">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs md:text-sm">
              <Link
                href="#"
                className="text-footer-copyright hover:text-luma-coral transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-footer-copyright hover:text-luma-coral transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-footer-copyright hover:text-luma-coral transition-colors duration-300"
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
