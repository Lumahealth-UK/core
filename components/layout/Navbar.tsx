'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SITE_NAME, NAV_LINKS } from '@/lib/constants/site'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { cn } from '@/lib/utils'

function useHashFragment() {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const read = () => setHash(window.location.hash.replace(/^#/, ''))
    read()
    window.addEventListener('hashchange', read)
    return () => window.removeEventListener('hashchange', read)
  }, [])

  return hash
}

function navLinkActive(href: string, hash: string) {
  if (!href.startsWith('/#')) return false
  return href.slice(2) === hash
}

function HamburgerIcon({ open }: { open: boolean }) {
  if (open) {
    return <span className="text-xl leading-none" aria-hidden>×</span>
  }
  return (
    <span className="flex flex-col gap-1.5" aria-hidden>
      <span className="h-0.5 w-5 rounded-full bg-main-text" />
      <span className="h-0.5 w-5 rounded-full bg-main-text" />
      <span className="h-0.5 w-5 rounded-full bg-main-text" />
    </span>
  )
}

function NavCta({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href={sectionHref(SECTION_IDS.CONTACT)}
      onClick={onClick}
      className={cn(
        'rounded-full px-5 font-semibold text-white',
        'bg-gradient-to-r from-luma-coral-deep to-luma-coral',
        'hover:opacity-95 transition-opacity',
        className
      )}
    >
      Get started
    </Link>
  )
}

interface NavLinksProps {
  className?: string
  onNavigate?: () => void
  layout: 'row' | 'stack'
}

function NavLinks({ className, onNavigate, layout }: NavLinksProps) {
  const hash = useHashFragment()

  return (
    <ul
      className={cn(
        layout === 'row'
          ? 'flex items-center gap-4 lg:gap-6 xl:gap-7 overflow-x-auto py-1 -my-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          : 'flex flex-col gap-1',
        className
      )}
    >
      {NAV_LINKS.map((link) => {
        const active = navLinkActive(link.href, hash)
        const sage = 'variant' in link && link.variant === 'sage'

        return (
          <li key={link.href} className="flex-shrink-0">
            <Link
              href={link.href}
              onClick={onNavigate}
              className={cn(
                'font-display text-sm tracking-tight transition-colors',
                'inline-block border-b-2 pb-0.5',
                sage
                  ? active
                    ? 'text-luma-sage-deep border-luma-sage'
                    : 'text-luma-sage border-b-transparent hover:text-luma-sage-deep'
                  : active
                    ? 'text-luma-coral-deep border-luma-coral-deep'
                    : 'text-muted-text border-b-transparent hover:text-main-text'
              )}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-3 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[999px] border border-luma-hairline bg-background px-4 py-3 sm:px-6 sm:py-3.5">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="nav-logo font-display text-lg sm:text-xl font-bold text-main-text shrink-0">
            Luma <em>Health</em>
          </Link>

          <NavLinks layout="row" className="hidden lg:flex flex-1 justify-center min-w-0 px-2" />

          <div className="flex items-center gap-2 shrink-0">
            <NavCta className="hidden lg:inline-flex py-2.5 text-sm" />

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-luma-hairline text-main-text"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-luma-hairline pt-4 lg:hidden">
            <NavLinks
              layout="stack"
              onNavigate={() => setMobileOpen(false)}
              className="pb-1"
            />
            <NavCta onClick={() => setMobileOpen(false)} className="mt-4 flex w-full items-center justify-center py-3 text-sm" />
          </div>
        ) : null}
      </div>
    </header>
  )
}
