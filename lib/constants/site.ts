import { sectionHref, SECTION_IDS } from '@/lib/constants/routes'


export const SITE_NAME = 'Luma Health UK'
export const SITE_DESCRIPTION =
  'Connecting students and young adults with vetted therapists — faster, simpler, more human.'
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumahealth.co.uk'


export const NAV_LINKS = [
  { label: 'How it works', href: sectionHref(SECTION_IDS.HOW_IT_WORKS) },
  { label: 'Therapists', href: sectionHref(SECTION_IDS.THERAPISTS) },
  // { label: 'Pricing', href: sectionHref(SECTION_IDS.PRICING) },
  { label: 'Our story', href: sectionHref(SECTION_IDS.OUR_STORY) },
  { label: 'FAQ', href: sectionHref(SECTION_IDS.FAQ) },
  { label: 'Blog', href: sectionHref(SECTION_IDS.BLOG) },
  { label: 'For Therapists', href: sectionHref(SECTION_IDS.FOR_THERAPISTS), variant: 'sage' as const },
] as const
