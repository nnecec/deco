import { Inter } from 'next/font/google'

import '~/core/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <title>Deco your Artwork</title>
      <meta name="description" content="Deco your picture of ART!" />
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
