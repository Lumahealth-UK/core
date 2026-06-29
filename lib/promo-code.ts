const LUMA_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export function generateLumaCode(prefix = 'LUMA') {
  const bytes = crypto.getRandomValues(new Uint8Array(6))
  const suffix = Array.from(
    bytes,
    (byte) => LUMA_CODE_ALPHABET[byte % LUMA_CODE_ALPHABET.length]
  ).join('')

  return `${prefix}-${suffix}`
}
