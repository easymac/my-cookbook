import { publicSans, bagnard, youngSerif } from '@/app/fonts'
import { MobileNav } from '@/components/global/MobileNav'
import CONFIG from '@/cookbook.config'
import { Metadata } from 'next'
import { getSharedMetadata, getSharedViewport } from './SharedHead'
import DarkModeLoader from './DarkModeLoader'

import './globals.css'
import '@icon-park/react/styles/index.css'
import { ViewTransitions } from 'next-view-transitions'

const sharedMetadata = getSharedMetadata()

export const metadata: Metadata = {
  title: CONFIG.siteTitle,
  description: CONFIG.siteDescription,
  metadataBase: new URL(CONFIG.siteURL || ''),
  openGraph: {
    type: 'website',
    url: CONFIG.siteURL,
    title: CONFIG.siteTitle,
    description: CONFIG.siteDescription,
    images: [`${CONFIG.siteURL}/favicons/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.siteTitle,
    description: CONFIG.siteDescription,
    images: [`${CONFIG.siteURL}/favicons/og-image.png`],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-192x192.png', sizes: '192x192' },
    ]
  },
  ...sharedMetadata,
}

export const viewport = {
  ...getSharedViewport(),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E3E3E3' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
}

export default function RootLayout(props: any) {
  const fontClassNames = [publicSans.variable, bagnard.variable, youngSerif.variable].join(' ')
  return (
    <ViewTransitions>
      <html lang="en" className={fontClassNames}>
        <head />
        <body>
          <DarkModeLoader />
          {props.children}
          <MobileNav />
        </body>
      </html>
    </ViewTransitions>
  )
}
