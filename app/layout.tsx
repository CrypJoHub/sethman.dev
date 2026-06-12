import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sethman | Web3 Developer & DeFi Architect',
  description: 'High-performance Web3 & DeFi Developer specializing in decentralized systems, liquidity aggregation, and privacy layers.',
  openGraph: {
    title: 'Sethman | Web3 Developer & DeFi Architect',
    description: 'Building high-performance decentralized systems with C, Python, and modern frontend stacks.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F5F7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-textDark font-sans antialiased selection:bg-accent selection:text-white overflow-x-hidden">
        {children}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  )
}
