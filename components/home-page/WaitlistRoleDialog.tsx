'use client'

import { useEffect, useId, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Check, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ACCREDITATION_BODIES,
  HOW_HEARD_OPTIONS,
  UK_UNIVERSITIES,
  type WaitlistUserType,
} from '@/lib/waitlist-options'
import { cn } from '@/lib/utils'

interface WaitlistRoleDialogProps {
  triggerLabel?: string
  triggerClassName?: string
  triggerSize?: 'sm' | 'md' | 'lg'
  initialRole?: WaitlistUserType
  onRoleSelect?: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyForm = {
  name: '',
  email: '',
  university: '',
  accreditationBody: '',
  howHeard: '',
}

export function WaitlistRoleDialog({
  triggerLabel = "I'm interested",
  triggerClassName,
  triggerSize = 'md',
  initialRole = 'student',
  onRoleSelect,
}: WaitlistRoleDialogProps) {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState<WaitlistUserType>(initialRole)
  const [form, setForm] = useState(emptyForm)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const fieldId = useId()

  useEffect(() => {
    if (!open) return

    setRole(initialRole)
    setStatus('idle')
    setMessage('')
    setTermsAccepted(false)
  }, [initialRole, open])

  const submitting = status === 'submitting'
  const student = role === 'student'

  function updateField(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userType: role,
        name: form.name,
        email: form.email,
        university: student ? form.university : undefined,
        accreditationBody: student ? undefined : form.accreditationBody,
        howHeard: form.howHeard,
        termsAccepted,
      }),
    })

    const data = (await response.json().catch(() => ({}))) as { error?: string }

    if (!response.ok) {
      setStatus('error')
      setMessage(data.error ?? 'Something went wrong. Please try again.')
      return
    }

    setStatus('success')
    setMessage("You're on the list. We'll be in touch soon.")
    setForm(emptyForm)
    setTermsAccepted(false)
    onRoleSelect?.()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="default" size={triggerSize} className={triggerClassName}>
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] max-w-xl overflow-y-auto rounded-[1.5rem] border-luma-hairline bg-background p-0 shadow-popup sm:rounded-[1.75rem]">
        <div className="bg-luma-canvas px-6 pb-5 pt-7 sm:px-8">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl font-bold tracking-tight text-main-text">
              Join the Luma waitlist
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-luma-mocha/65">
              Leave your details and we&apos;ll contact you when early access opens.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-2 rounded-full bg-white p-1 shadow-[0_8px_24px_rgba(61,47,30,0.05)]">
            {(['student', 'therapist'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setRole(item)
                  setStatus('idle')
                  setMessage('')
                }}
                className={cn(
                  'h-10 rounded-full text-sm font-semibold capitalize transition-colors',
                  role === item
                    ? item === 'student'
                      ? 'bg-luma-coral text-white'
                      : 'bg-luma-sage text-white'
                    : 'text-luma-mocha/60 hover:text-luma-mocha'
                )}
                aria-pressed={role === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {status === 'success' ? (
          <div className="px-6 py-8 sm:px-8">
            <div className="flex items-start gap-4 rounded-2xl border border-luma-sage/25 bg-luma-sage-soft p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luma-sage text-white">
                <Check className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-luma-mocha">You&apos;re in.</h3>
                <p className="mt-1 text-sm leading-6 text-luma-mocha/70">{message}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 px-6 py-7 sm:px-8">
            <Field label="Name" htmlFor={`${fieldId}-name`}>
              <Input
                id={`${fieldId}-name`}
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                autoComplete="name"
                required
                className="h-11 rounded-xl border-luma-hairline bg-white"
              />
            </Field>

            <Field label={student ? 'Email' : 'Professional email'} htmlFor={`${fieldId}-email`}>
              <Input
                id={`${fieldId}-email`}
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                autoComplete="email"
                required
                className="h-11 rounded-xl border-luma-hairline bg-white"
              />
            </Field>

            {student ? (
              <Field label="University" htmlFor={`${fieldId}-university`}>
                <SearchableSelect
                  id={`${fieldId}-university`}
                  value={form.university}
                  onChange={(value) => updateField('university', value)}
                  options={UK_UNIVERSITIES}
                  placeholder="Choose your university"
                  required
                />
              </Field>
            ) : (
              <Field label="Accreditation body" htmlFor={`${fieldId}-accreditation`}>
                <Select
                  id={`${fieldId}-accreditation`}
                  value={form.accreditationBody}
                  onChange={(value) => updateField('accreditationBody', value)}
                  options={ACCREDITATION_BODIES}
                  placeholder="Choose accreditation body"
                  required
                />
              </Field>
            )}

            <Field label="How did you hear about Luma?" htmlFor={`${fieldId}-heard`}>
              <Select
                id={`${fieldId}-heard`}
                value={form.howHeard}
                onChange={(value) => updateField('howHeard', value)}
                options={HOW_HEARD_OPTIONS}
                placeholder="Choose one"
                required
              />
            </Field>

            <ConsentCheckbox
              id={`${fieldId}-terms`}
              checked={termsAccepted}
              onChange={setTermsAccepted}
            />

            {status === 'error' && (
              <p className="rounded-xl border border-luma-coral/25 bg-luma-coral-tint px-4 py-3 text-sm font-medium text-luma-coral-deep">
                {message}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={submitting || !termsAccepted}
              className={cn('mt-1 w-full', student ? '' : 'bg-luma-sage hover:bg-luma-sage-deep')}
            >
              {submitting && <Loader2 className="animate-spin" aria-hidden="true" />}
              {submitting ? 'Joining...' : 'Join waitlist'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function ConsentCheckbox({
  id,
  checked,
  onChange,
}: {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-luma-hairline bg-luma-canvas px-4 py-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        required
        className="mt-1 h-4 w-4 rounded border-luma-hairline accent-luma-coral"
      />
      <div className="text-sm leading-6 text-luma-mocha/75">
        <Label htmlFor={id} className="font-medium text-luma-mocha/75">
          I agree to Luma&apos;s{' '}
        </Label>
        <PolicyDialog
          title="Terms & Conditions"
          fileUrl="/legal/luma-terms-conditions.pdf"
          accepted={checked}
          onAcceptedChange={onChange}
        />
        <span> and </span>
        <PolicyDialog
          title="Privacy Policy"
          fileUrl="/legal/luma-privacy-policy.pdf"
          accepted={checked}
          onAcceptedChange={onChange}
        />
        <span>.</span>
      </div>
    </div>
  )
}

function PolicyDialog({
  title,
  fileUrl,
  accepted,
  onAcceptedChange,
}: {
  title: string
  fileUrl: string
  accepted: boolean
  onAcceptedChange: (checked: boolean) => void
}) {
  const checkboxId = useId()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="font-semibold text-luma-coral-deep underline underline-offset-2 transition-colors hover:text-luma-coral"
        >
          {title}
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto rounded-[1.5rem] border-luma-hairline bg-background p-0 shadow-popup sm:rounded-[1.75rem]">
        <div className="border-b border-luma-hairline bg-luma-canvas px-6 py-5 sm:px-8">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-bold text-main-text">
              {title}
            </DialogTitle>
            <DialogDescription className="text-sm text-luma-mocha/65">
              Please read the document before joining the waitlist.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-4 py-4 sm:px-6">
          <iframe
            title={title}
            src={fileUrl}
            className="h-[64vh] w-full rounded-xl border border-luma-hairline bg-white"
          />
        </div>

        <div className="grid gap-4 border-t border-luma-hairline bg-white px-6 py-5 sm:px-8">
          <label
            htmlFor={checkboxId}
            className="flex items-start gap-3 text-sm font-medium leading-6 text-luma-mocha/75"
          >
            <input
              id={checkboxId}
              type="checkbox"
              checked={accepted}
              onChange={(event) => onAcceptedChange(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-luma-hairline accent-luma-coral"
            />
            <span>I agree to Luma&apos;s Terms & Conditions and Privacy Policy.</span>
          </label>

          <DialogClose asChild>
            <Button type="button" size="lg" className="w-full">
              Done
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-luma-mocha">
        {label}
      </Label>
      {children}
    </div>
  )
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  options: readonly {
    value: string
    label: string
  }[]
  placeholder: string
  required?: boolean
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      className="flex h-11 w-full rounded-xl border border-luma-hairline bg-white px-3 py-2 text-sm text-luma-mocha shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

function SearchableSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  options: readonly string[]
  placeholder: string
  required?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState(value)
  const listboxId = `${id}-listbox`
  const validSelection = !query || options.includes(query)

  useEffect(() => {
    setQuery(value)
  }, [value])

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) return options.slice(0, 12)

    return options.filter((option) => option.toLowerCase().includes(normalizedQuery)).slice(0, 12)
  }, [options, query])

  return (
    <div className="relative">
      <input
        id={id}
        value={query}
        onChange={(event) => {
          const nextValue = event.target.value
          setQuery(nextValue)
          onChange(options.includes(nextValue) ? nextValue : '')
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          window.setTimeout(() => {
            setOpen(false)

            if (query && !options.includes(query)) {
              setQuery('')
              onChange('')
            }
          }, 120)
        }}
        placeholder={placeholder}
        required={required}
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-invalid={!validSelection}
        className="flex h-11 w-full rounded-xl border border-luma-hairline bg-white px-3 py-2 text-sm text-luma-mocha shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />

      {open && filteredOptions.length > 0 && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-50 max-h-64 overflow-y-auto rounded-xl border border-luma-hairline bg-white p-1 shadow-popup"
        >
          {filteredOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={option === value}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setQuery(option)
                onChange(option)
                setOpen(false)
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-luma-mocha transition-colors hover:bg-luma-canvas"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
