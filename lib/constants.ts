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

export const SITE_NAME = 'Luma Health UK'
export const SITE_DESCRIPTION =
  'Connecting students and young adults with vetted therapists — faster, simpler, more human.'
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumahealth.co.uk'
export const DEFAULT_SITE_URL = 'https://www.lumahealthuk.com'
export const SUPPORT_EMAIL = 'support@lumahealthuk.com'
export const HELLO_EMAIL = 'hello@lumahealthuk.com'

export const NAV_LINKS = [
  { label: 'How it works', href: sectionHref(SECTION_IDS.HOW_IT_WORKS) },
  { label: 'Therapists', href: sectionHref(SECTION_IDS.THERAPISTS) },
  // { label: 'Pricing', href: sectionHref(SECTION_IDS.PRICING) },
  { label: 'Our story', href: sectionHref(SECTION_IDS.OUR_STORY) },
  { label: 'FAQ', href: sectionHref(SECTION_IDS.FAQ) },
  { label: 'Blog', href: sectionHref(SECTION_IDS.BLOG) },
  {
    label: 'For Therapists',
    href: sectionHref(SECTION_IDS.FOR_THERAPISTS),
    variant: 'sage' as const,
  },
] as const

export const WAITLIST_USER_TYPES = ['student', 'therapist'] as const

export type WaitlistUserType = (typeof WAITLIST_USER_TYPES)[number]

export const UK_UNIVERSITIES = [
  'Aberystwyth University',
  'Anglia Ruskin University',
  'Aston University',
  'Bangor University',
  'Bath Spa University',
  'Birkbeck, University of London',
  'Birmingham City University',
  'Bournemouth University',
  'Brunel University London',
  'Buckinghamshire New University',
  'Canterbury Christ Church University',
  'Cardiff Metropolitan University',
  'Cardiff University',
  'City St George’s, University of London',
  'Coventry University',
  'Cranfield University',
  'De Montfort University',
  'Durham University',
  'Edge Hill University',
  'Edinburgh Napier University',
  'Falmouth University',
  'Glasgow Caledonian University',
  'Goldsmiths, University of London',
  'Harper Adams University',
  'Heriot-Watt University',
  'Imperial College London',
  'Keele University',
  'Kingston University',
  'Lancaster University',
  'Leeds Beckett University',
  'Liverpool Hope University',
  'Liverpool John Moores University',
  'London Metropolitan University',
  'London School of Economics and Political Science',
  'London South Bank University',
  'Loughborough University',
  'Manchester Metropolitan University',
  'Middlesex University',
  'Newcastle University',
  'Northumbria University',
  'Nottingham Trent University',
  'Oxford Brookes University',
  'Queen Margaret University',
  'Queen Mary University of London',
  'Queen’s University Belfast',
  'Robert Gordon University',
  'Royal Agricultural University',
  'Royal Central School of Speech and Drama',
  'Royal College of Art',
  'Royal College of Music',
  'Royal Holloway, University of London',
  'Royal Northern College of Music',
  'Royal Veterinary College',
  'Sheffield Hallam University',
  'SOAS University of London',
  'Solent University',
  'St Mary’s University, Twickenham',
  'Staffordshire University',
  'Swansea University',
  'Teesside University',
  'The Open University',
  'University College Birmingham',
  'University College London',
  'University for the Creative Arts',
  'University of Aberdeen',
  'University of Bath',
  'University of Bedfordshire',
  'University of Birmingham',
  'University of Bolton',
  'University of Bradford',
  'University of Brighton',
  'University of Bristol',
  'University of Buckingham',
  'University of Cambridge',
  'University of Central Lancashire',
  'University of Chester',
  'University of Chichester',
  'University of Cumbria',
  'University of Derby',
  'University of Dundee',
  'University of East Anglia',
  'University of East London',
  'University of Edinburgh',
  'University of Essex',
  'University of Exeter',
  'University of Glasgow',
  'University of Gloucestershire',
  'University of Greenwich',
  'University of Hertfordshire',
  'University of Huddersfield',
  'University of Hull',
  'University of Kent',
  'University of Leeds',
  'University of Leicester',
  'University of Lincoln',
  'University of Liverpool',
  'University of Manchester',
  'University of Northampton',
  'University of Nottingham',
  'University of Oxford',
  'University of Plymouth',
  'University of Portsmouth',
  'University of Reading',
  'University of Roehampton',
  'University of Salford',
  'University of Sheffield',
  'University of South Wales',
  'University of Southampton',
  'University of St Andrews',
  'University of Stirling',
  'University of Strathclyde',
  'University of Suffolk',
  'University of Sunderland',
  'University of Surrey',
  'University of Sussex',
  'University of the Arts London',
  'University of the Highlands and Islands',
  'University of the West of England',
  'University of Warwick',
  'University of West London',
  'University of Westminster',
  'University of Winchester',
  'University of Wolverhampton',
  'University of Worcester',
  'University of York',
  'Other',
] as const

export const HOW_HEARD_OPTIONS = [
  { value: 'tiktok', label: 'TikTok' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'word_of_mouth', label: 'Word of mouth' },
  { value: 'blog', label: 'Blog' },
  { value: 'google_search', label: 'Google search' },
  { value: 'university', label: 'University' },
  { value: 'other', label: 'Other' },
] as const

export const ACCREDITATION_BODIES = [
  { value: 'BACP', label: 'BACP' },
  { value: 'UKCP', label: 'UKCP' },
  { value: 'NCPS', label: 'NCPS' },
  { value: 'BABCP', label: 'BABCP' },
  { value: 'BPS', label: 'BPS' },
  { value: 'COSCA', label: 'COSCA' },
  { value: 'other', label: 'Other' },
] as const

export const HOW_HEARD_VALUES = HOW_HEARD_OPTIONS.map((option) => option.value)

export const ACCREDITATION_BODY_VALUES = ACCREDITATION_BODIES.map((option) => option.value)

export const BREVO_SEND_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email'

export const WAITLIST_EMAIL_CONFIG = {
  student: {
    subject: "You're on the Luma student waitlist",
    templateDir: 'student',
  },
  therapist: {
    subject: "You're on the Luma therapist waitlist",
    templateDir: 'therapist',
  },
} satisfies Record<
  WaitlistUserType,
  {
    subject: string
    templateDir: string
  }
>
