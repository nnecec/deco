import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Decoo your artwork</title>
      <meta name="description" content="Decoo your picture of ART!" />
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
