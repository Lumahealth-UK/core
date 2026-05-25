'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h2 className="font-heading text-3xl font-bold text-main-text">Something went wrong</h2>
      <p className="text-muted-text max-w-md text-center">{error.message ?? 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="rounded-full bg-luma-coral px-6 py-2.5 text-white font-semibold hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </main>
  )
}
