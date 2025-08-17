import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Govind Raj | Portfolio',
  description: 'Govindraj – Full-stack Developer, UI/UX Designer and Technology Enthusiast. Explore my projects and experience.',


  keywords: ['Govindraj', 'Web Developer', 'UI/UX', 'Portfolio', 'JavaScript', 'Next.js', 'govindraj', 'Full-stack Developer', 'Open Source Contributor', 'govind raj Srm', 'Govind Raj', 'Govindraj', 'Govind Raj portfolio', 'Govind Raj Portfolio', 'Govind Rajportfolio', 'Portfolio', 'Govind Rajsrmktr', 'Govind Raj SRM', 'Govind Raj SRMIST', 'Govind Rajadgitm', 'Govind Raj adgitm', 'Govind Raj 2025 adgitm', 'Govind Rajggsipu', 'Govind Raj ggsipu', 'Govind Raj shahdara', 'Govind Raj digilocker', 'Govind Raj c4gt', 'C4GT', 'Govind Raj ethiraj', 'Govind Ethiraj', 'Dr Raj Govind Sharma', 'Raj Govind Sharma', 'Govind Raj temple Tirupati', 'Govind Raj Chauhan', 'Dr Govind Raj', 'VNS Govind Raj', 'Dr Govind Raj Behera', 'Govind Raj Govind Raj', 'Govind Raj IP', 'Raj Nath Govind', 'Govind Raj Cricketer', 'Govind Raj Joshi', 'Govind Raj MLC', 'Raj Govind', 'Software Engineer', 'CSE Graduate', 'Tech Enthusiast', 'Programming', 'Web Development', 'Full-Stack Developer', 'UI/UX', 'JavaScript', 'Next.js', 'Open Source', 'Open Source Contributor', 'Technology Projects', 'Web Developer', 'Govind Raj UI/UX', 'Govind Raj Web Developer', 'Govind Raj Full-Stack Developer', 'govindraj', 'govind raj developer', 'govind raj UI/UX', 'govind raj portfolio', 'govind raj next.js', 'govind raj javascript', 'govind raj open source', 'govind raj srmist', 'govind raj srm'],



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
