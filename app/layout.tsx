'use client'

import { SSRProvider } from 'react-aria'

import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  )
}
