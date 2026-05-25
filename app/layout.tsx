import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const cooper = localFont({
  src: '../public/fonts/CooperLtBT-Bold.ttf',
  variable: '--font-cooper',
  weight: '700',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cooper.variable}`}
    >
      <body className="font-sans text-main-text antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
