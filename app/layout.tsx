import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

// Next doesn't prefix basePath onto metadata icon URLs in static export,
// so resolve them ourselves (empty on Vercel, /ascii-art-portfolio on Pages).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'ian gonzalez — full-stack dev & ethical hacker',
  description:
    'Monochrome terminal portfolio of Ian Gonzalez — full-stack developer and ethical hacker. Founder of Workforce OS and Terminal Zero.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: `${BASE}/favicon.ico`, sizes: '32x32' },
      {
        url: `${BASE}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${BASE}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${BASE}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    shortcut: `${BASE}/favicon.ico`,
    apple: `${BASE}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${jetbrainsMono.variable}`}>
      <body className="antialiased font-mono">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
        <div className="crt-overlay" aria-hidden="true" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
