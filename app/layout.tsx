import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lewis Electrical & Building Projects | Professional Electrical & Industrial Services',
  description: 'Expert electrical installation, maintenance, plumbing, and welding services in Johannesburg. Commercial and industrial solutions by Lewis Electrical & Building Projects.',
  keywords: 'electrical services, industrial electrical, plumbing, welding, Johannesburg, Benoni, panel wiring, DB board inspection',
  authors: [{ name: 'Lewis Electrical & Building Projects' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/REMADE1.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/REMADE1.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/REMADE1.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Lewis Electrical & Building Projects',
    description: 'Professional Electrical & Industrial Services in Johannesburg',
    type: 'website',
    images: [
      {
        url: '/images/REMADE1.png',
        width: 1200,
        height: 630,
        alt: 'Lewis Electrical & Building Projects Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
