import '~/core/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Decox your Artwork</title>
      <meta name="description" content="Decox your picture of ART!" />
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
