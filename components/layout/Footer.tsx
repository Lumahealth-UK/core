import Link from 'next/link'
import { SITE_NAME, NAV_LINKS } from '@/lib/constants/site'
import { SECTION_IDS } from '@/lib/constants/routes'

export function Footer() {
  return (
    <footer id={SECTION_IDS.CONTACT} className="bg-footer-bg text-footer-text scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <p className="font-display text-lg font-bold">{SITE_NAME}</p>
            <p className="text-sm text-footer-muted max-w-xs">
              Connecting patients with the care they need — faster, simpler, and more human.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted hover:text-footer-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-footer-muted">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
