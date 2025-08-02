import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Govind Raj | Portfolio',
  description: 'Govindraj – Full-stack Developer, UI/UX Designer and Technology Enthusiast. Explore my projects and experience.',
  keywords: ['Govindraj', 'Web Developer', 'UI/UX', 'Portfolio', 'JavaScript', 'Next.js'],
  authors: [{ name: 'Govindraj' }],
  openGraph: {
    title: 'Govind Raj | Portfolio',
    description: 'Explore my work in full-stack development and design.',
    url: 'https://govindraj.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://govindraj.vercel.app/govind-photo.png', // Replace with your actual image name
        width: 1200,
        height: 630,
        alt: 'Govindraj Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Govind Raj | Portfolio',
    description: 'Explore my work in full-stack development and UI/UX.',
    images: ['https://govindraj.vercel.app/govind-photo.png'], // Replace with actual image
  },
  other: {
    'google-site-verification': '66WJ1jMypSI4-idkB5gy2hWv1RTT42kKbpaW8w7ET4s',
  },
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
