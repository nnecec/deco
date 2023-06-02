import clsx from 'clsx'

import { inter } from '~/core/fonts'

import type { Metadata } from 'next'

import { Providers } from './providers'

import '~/core/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Deco your Artwork',
    template: `%s - Deco your Artwork`,
  },
  description: 'Deco your Artwork!',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={clsx('font-sans', inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
