import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildRequestUrl(
  request: Request,
  pathname: string,
  params?: Record<string, string>
) {
  const requestUrl = new URL(request.url)
  const baseUrl = requestUrl.origin.replace(/\/$/, '')
  const url = new URL(pathname, baseUrl)

  Object.entries(params ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}
