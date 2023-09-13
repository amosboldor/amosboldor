import './globals.css'
import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}
