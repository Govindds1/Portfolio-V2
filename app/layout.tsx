import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Govind Raj | Portfolio',
  description: 'My developer portfolio site',
  other: {
    'google-site-verification': '66WJ1jMypSI4-idkB5gy2hWv1RTT42kKbpaW8w7ET4s' // ← replace this
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
