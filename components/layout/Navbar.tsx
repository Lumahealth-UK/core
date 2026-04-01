'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SITE_NAME, NAV_LINKS } from '@/lib/constants/site'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function useHashFragment() {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const read = () => setHash(window.location.hash.replace(/^#/, ''))
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || (!href.startsWith('/#') && !href.startsWith('#'))) return

      const nextHash = href.startsWith('#') ? href.slice(1) : href.slice(2)
      setHash(nextHash)
    }

    window.addEventListener('hashchange', read)
    document.addEventListener('click', onDocumentClick)
    return () => {
      window.removeEventListener('hashchange', read)
      document.removeEventListener('click', onDocumentClick)
    }
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
      className={cn(buttonVariants({ variant: 'default', size: 'md' }), className)}
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
                'font-display text-[15px] tracking-tight transition-colors',
                "relative inline-block pb-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-['']",
                sage
                  ? active
                    ? 'text-luma-sage-deep after:bg-luma-sage after:scale-x-100'
                    : 'text-luma-sage-deep/85 after:bg-luma-sage hover:text-luma-sage-deep'
                  : active
                    ? 'text-luma-coral-deep after:bg-luma-coral-deep after:scale-x-100'
                    : 'text-main-text/85 after:bg-luma-coral-deep hover:text-main-text'
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
    <header className="sticky top-0 z-50 w-full px-4 pt-5 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[999px] border border-luma-hairline bg-background/70 px-4 py-3.5 shadow-sm backdrop-blur-2xl sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="nav-logo font-display text-xl font-bold tracking-tight text-main-text sm:text-2xl shrink-0"
          >
            Luma<em className="text-luma-coral-deep">Health</em>
          </Link>

          <NavLinks layout="row" className="hidden lg:flex flex-1 justify-center min-w-0 px-2" />

          <div className="flex items-center gap-2 shrink-0">
            <NavCta className="hidden lg:inline-flex" />

            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-luma-hairline text-main-text"
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
            <NavCta onClick={() => setMobileOpen(false)} className="mt-4 w-full" />
          </div>
        ) : null}
      </div>
    </header>
  )
}
