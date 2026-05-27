export interface ComparisonRow {
  service: string
  cost: string
  wait: string
  isLuma?: boolean
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { service: 'Luma Health', cost: '£32', wait: 'Same week', isLuma: true },
  { service: 'Private therapy', cost: '£80', wait: '2–3 weeks' },
  { service: 'Uni counselling', cost: 'Free', wait: '6+ weeks' },
  { service: 'NHS IAPT', cost: 'Free', wait: '18+ weeks' },
]
