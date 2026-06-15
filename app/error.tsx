'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

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
      <p className="max-w-md text-center text-muted-text">
        {error.message ?? 'An unexpected error occurred.'}
      </p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </main>
  )
}
