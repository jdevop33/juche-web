import '@/styles/globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Juche Empowerment',
  description: 'Embracing Self-Reliance, Global Respect, and Personal Responsibility through Karate',
  openGraph: {
    title: 'Juche Empowerment',
    description: 'Embracing Self-Reliance, Global Respect, and Personal Responsibility through Karate',
    url: 'https://juche.org',
    siteName: 'Karate Empowerment',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karate Empowerment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karate Empowerment',
    description: 'Embracing Self-Reliance, Global Respect, and Personal Responsibility through Karate',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

