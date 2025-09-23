import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export function generateSEO({
  title = 'CareTrack - Powered By Sthiram',
  description = 'Transform your healthcare management with CareTrack powered by Sthiram. Track health records, manage appointments, and improve your health journey.',
  canonical = 'https://caretrack.sthiram.com',
  ogImage = '/caretrack.png'
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    authors: [{ name: 'Sthiram Technologies' }],
    creator: 'Sthiram Technologies',
    publisher: 'CareTrack',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://caretrack.sthiram.com'),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'CareTrack',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@caretrack',
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
}
