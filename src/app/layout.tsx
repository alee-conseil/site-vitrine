import { pageMetadata } from '@/content/general'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Partenaire de confiance pour un accompagnement réussi",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    images: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
