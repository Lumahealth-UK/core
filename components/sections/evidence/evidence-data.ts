export interface EvidenceStat {
  value: string
  label: string
  source?: string
}

export const evidenceStats: EvidenceStat[] = [
  { value: '74%', label: 'Reduction in PHQ-9 score after 6 sessions', source: 'Internal audit 2024' },
  { value: '5 days', label: 'Median time to first appointment', source: 'Platform data' },
  { value: '4.8★', label: 'Average therapist rating', source: '2,400+ reviews' },
  { value: '92%', label: 'Continued with a second therapist block', source: 'Retention data' },
]
