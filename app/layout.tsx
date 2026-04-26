import type { Metadata } from 'next'
import { Source_Serif_4, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahjong: a Visual Guide',
  description: 'Learn mahjong - A visual guide for total beginners',
  icons: {
    icon: '/tiles/modal-tile.svg',
    shortcut: '/tiles/modal-tile.svg',
    apple: '/tiles/modal-tile.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="jade" className={`${sourceSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
