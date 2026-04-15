'use client'

import Link from 'next/link'
import { SECTION_IDS, sectionHref } from '@/lib/constants/routes'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface WaitlistRoleDialogProps {
  triggerLabel?: string
  triggerClassName?: string
  triggerSize?: 'sm' | 'md' | 'lg'
  onRoleSelect?: () => void
}

export function WaitlistRoleDialog({
  triggerLabel = 'Join waitlist',
  triggerClassName,
  triggerSize = 'md',
  onRoleSelect,
}: WaitlistRoleDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="default" size={triggerSize} className={triggerClassName}>
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-[2rem] border-luma-hairline bg-background p-8 shadow-popup [&>button]:hidden">
        <DialogHeader className="items-center text-center">
          <DialogTitle className="font-display text-3xl font-bold tracking-tight text-main-text">
            You are a:
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-3 sm:grid-cols-2">
          <DialogClose asChild>
            <Link
              href={sectionHref(SECTION_IDS.CONTACT)}
              onClick={onRoleSelect}
              className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-full')}
            >
              Student
            </Link>
          </DialogClose>

          <DialogClose asChild>
            <Link
              href={sectionHref(SECTION_IDS.FOR_THERAPISTS)}
              onClick={onRoleSelect}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'w-full bg-luma-sage text-white hover:bg-luma-sage-deep hover:text-white'
              )}
            >
              Therapist
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
