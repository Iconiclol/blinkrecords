import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLINK Records',
  description: 'BLINK Records',
  generator: 'BLINK Records',
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
