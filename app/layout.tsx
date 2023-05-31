import { inter } from '~/core/fonts'

import '~/core/styles/globals.css'

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
