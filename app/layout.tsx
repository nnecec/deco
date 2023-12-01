import type { Metadata, Viewport } from 'next'

import clsx from 'clsx'

import { inter } from '~/core/fonts'

import { Providers } from './providers'

import '~/core/styles/globals.css'

export const metadata: Metadata = {
  description: 'Deco your Artwork!',
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
  title: {
    default: 'Deco your Artwork',
    template: '%s - Deco your Artwork',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en">
      <body className={clsx('font-sans', inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
