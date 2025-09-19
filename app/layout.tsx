import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'

export const metadata: Metadata = {
  title: 'Atlantic Grip Tires - Premium Tire Specialists in Newfoundland',
  description: 'Newfoundland\'s premier direct import tire specialist. Get premium quality tires at unbeatable prices with expert service. 60-minute installation, no appointment needed.',
  keywords: 'tires, Newfoundland, St. Johns, tire service, winter tires, summer tires, tire installation, Atlantic Grip',
  authors: [{ name: 'Atlantic Grip Tires' }],
  metadataBase: new URL('https://atlanticgriptires.ca'),
  openGraph: {
    title: 'Atlantic Grip Tires - Your One Stop Shop for Premium Tires',
    description: 'Direct import tires at wholesale prices. Expert installation in 60 minutes. Serving all of Newfoundland & Labrador.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Atlantic Grip Tires',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Atlantic Grip Tires Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlantic Grip Tires - Premium Tire Specialists',
    description: 'Direct import tires at wholesale prices. Expert installation in 60 minutes.',
    images: ['/logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DC2626',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased bg-dark text-gray-100">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}