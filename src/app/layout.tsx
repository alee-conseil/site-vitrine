import { pageMetadata } from '@/content/general'
import { Inter } from 'next/font/google'
import { WebSite, WithContext } from 'schema-dts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
    },
  },
  icons: {
    icon: 'https://www.aleeconseil.com/favicon.ico',
    apple: 'https://www.aleeconseil.com/apple-icon.png',
    shortcut: ['https://www.aleeconseil.com/favicons/shortcut-icon-128.png', 'https://www.aleeconseil.com/favicons/shortcut-icon-192.png'],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-76.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-120.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-152.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-16.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-32.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-48.png',
      }
    ],
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: 'https://www.aleeconseil.com',
    images: {
      url: 'https://www.aleeconseil.com/favicon.ico',
      width: 48,
      height: 48,
    },
    locale: 'fr',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': 1024,
    }
  },
  themeColor: "#644E9B",
  category: 'technology',
}

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Alee Conseil',
  alternateName: 'Alee conseil',
  url: 'https://www.aleeconseil.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
