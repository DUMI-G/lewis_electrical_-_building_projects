import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lewis Electrical & Building Projects | Professional Electrical & Industrial Services',
  description: 'Expert electrical installation, maintenance, plumbing, and welding services in Johannesburg. Commercial and industrial solutions by Lewis Electrical & Building Projects.',
  keywords: 'electrical services, industrial electrical, plumbing, welding, Johannesburg, Benoni, panel wiring, DB board inspection',
  authors: [{ name: 'Lewis Electrical & Building Projects' }],
  openGraph: {
    title: 'Lewis Electrical & Building Projects',
    description: 'Professional Electrical & Industrial Services in Johannesburg',
    type: 'website',
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
