export interface Therapist {
  name: string
  photo: string
  credential: string
  specialties: string[]
  rating: number
  students: number
}

export interface TrustSignal {
  metric: string
  label: string
}

export const THERAPISTS: Therapist[] = [
  {
    name: 'Dr. Priya Sharma',
    photo: '/images/therapist-headshots/priya.png',
    credential: 'BACP Accredited · 8 yrs student experience',
    specialties: ['CBT', 'Anxiety', 'Mindfulness'],
    rating: 4.9,
    students: 214,
  },
  {
    name: 'Dr. James Okafor',
    photo: '/images/therapist-headshots/james.png',
    credential: 'UKCP Registered · 6 yrs',
    specialties: ['ACT', 'Depression', 'Identity'],
    rating: 4.8,
    students: 178,
  },
  {
    name: 'Dr. Sofia Andrade',
    photo: '/images/therapist-headshots/sofia.png',
    credential: 'BACP Accredited · 10 yrs',
    specialties: ['DBT', 'Relationships', 'Self-esteem'],
    rating: 4.9,
    students: 261,
  },
]

export const TRUST_SIGNALS: TrustSignal[] = [
  { metric: '100%', label: 'BACP or UKCP accredited' },
  { metric: '$32', label: 'Planned starting session price' },
  { metric: '2026', label: 'Planned student launch' },
]
