import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Symbols } from 'next/font/google'

const noto_sans_symbols = Noto_Sans_Symbols({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amos Boldor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans_symbols.className} min-h-screen min-w-screen px-6 py-12 bg-gradient-to-br from-slate-950 via-cyan-950 to-cyan-900`}>{children}</body>
    </html>
  )
}
