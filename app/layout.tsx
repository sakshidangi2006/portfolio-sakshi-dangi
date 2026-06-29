import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://sakshi-dangi.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sakshi Dangi — AI & Machine Learning Engineer',
    template: '%s — Sakshi Dangi',
  },
  description:
    'Sakshi Dangi is an AI & Machine Learning Engineer building intelligent software with Python, Flask, Machine Learning, LLM APIs and scalable backend systems.',
  keywords: [
    'Sakshi Dangi',
    'AI Engineer',
    'Machine Learning Engineer',
    'Python',
    'Flask',
    'LLM',
    'Backend Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Sakshi Dangi' }],
  creator: 'Sakshi Dangi',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Sakshi Dangi — AI & Machine Learning Engineer',
    description:
      'Building intelligent software using Python, Flask, Machine Learning, LLM APIs and scalable backend systems.',
    siteName: 'Sakshi Dangi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakshi Dangi — AI & Machine Learning Engineer',
    description:
      'Building intelligent software using Python, Flask, Machine Learning, LLM APIs and scalable backend systems.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
