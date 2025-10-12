import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLINK Records',
  description: 'BLINK Records',
  generator: 'BLINKRECORDS.XYZ',
  icons: {
    icon: '/favicon-96x96.png',
    apple: '/favicon-96x96.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
