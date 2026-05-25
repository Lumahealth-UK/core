// Section anchors on the single-page homepage (e.g. /#pricing).

export const LANDING_PAGE = '/' as const

export const SECTION_IDS = {
  HERO: 'hero',
  WHO_ITS_FOR: 'who-its-for',
  HOW_IT_WORKS: 'how-it-works',
  WHAT_YOU_GET: 'what-you-get',
  TRUST_SAFETY: 'trust-safety',
  STUDENT_STORIES: 'student-stories',
  OUR_STORY: 'our-story',
  EVIDENCE: 'evidence',
  PRICING: 'pricing',
  THERAPISTS: 'therapists',
  FOUNDERS: 'founders',
  FAQ: 'faq',
  BLOG: 'blog',
  CONTACT: 'contact',
  FOR_THERAPISTS: 'for-therapists',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

/** Anchor href for a section, e.g. '/#pricing' */
export function sectionHref(id: SectionId): string {
  return `${LANDING_PAGE}#${id}`
}
