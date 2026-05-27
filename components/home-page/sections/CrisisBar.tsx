/**
 * Crisis bar — fixed to the bottom of the viewport.
 * Provides immediate signposting to crisis resources.
 * Always visible, not wrapped in Section (no anchor needed).
 */
export function CrisisBar() {
  return (
    <div
      role="complementary"
      aria-label="Crisis support"
      className="fixed bottom-0 left-0 right-0 z-50 bg-luma-coral px-6 py-3"
    >
      <p className="mx-auto max-w-screen-xl text-center text-xs text-white/90">
        <span className="font-semibold text-white">In crisis?</span>{' '}
        Call{' '}
        <a href="tel:116123" className="font-semibold text-white underline decoration-white/60 underline-offset-2">
          Samaritans 116 123
        </a>{' '}
        (free, 24/7) or text{' '}
        <a href="sms:85258" className="font-semibold text-white underline decoration-white/60 underline-offset-2">
          SHOUT to 85258
        </a>
        .{' '}
        <a
          href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline decoration-white/60 underline-offset-2"
        >
          NHS urgent support →
        </a>
      </p>
    </div>
  )
}
