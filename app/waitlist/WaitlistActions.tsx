'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { WaitlistRoleDialog } from '@/components/home-page/WaitlistRoleDialog'
import { Button } from '@/components/ui/button'

export function WaitlistActions({ autoOpen = false }: { autoOpen?: boolean }) {
  const [copied, setCopied] = useState(false)

  async function copyCurrentLink() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <WaitlistRoleDialog
        triggerLabel="Join waitlist"
        triggerSize="lg"
        triggerClassName="w-full sm:w-auto"
        initialRole="student"
        defaultOpen={autoOpen}
      />
      <Button
        type="button"
        variant="secondary"
        size="lg"
        onClick={copyCurrentLink}
        className="w-full border border-luma-hairline bg-white text-luma-mocha shadow-sm hover:bg-luma-canvas sm:w-auto"
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? 'Copied' : 'Copy link'}
      </Button>
    </div>
  )
}
