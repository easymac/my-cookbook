import { Suspense } from 'react'
import { Metadata as PageMetadata, Viewport } from 'next'
import { Metadata } from '@cooklang/cooklang-ts'
import CONFIG from '@/cookbook.config'
import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeList } from '@/components/RecipeList'
import { StaticRecipeList } from '@/components/StaticRecipeList'
import { Container } from '@/components/ui/Container'
import { Header } from '@/components/global/Header'


export default async function Home() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  if (recipeMetas.length === 0) {
    return <div>No recipes found</div>
  }
  return (
    <>
    <Header showBackButton={false} />
    <main>
      <Suspense fallback={<StaticRecipeList recipeMetas={recipeMetas} />}>
        <RecipeList recipeMetas={recipeMetas} />
      </Suspense>
    </main>
    </>
  )
}

const URLs = {
  16: `${CONFIG.faviconDirectory}/favicon-16x16.png`,
  32: `${CONFIG.faviconDirectory}/favicon-32x32.png`,
  appleTouchIcon: `${CONFIG.faviconDirectory}/apple-touch-icon.png`,
  manifest: `${CONFIG.faviconDirectory}/site.webmanifest`,
  favicon: `${CONFIG.faviconDirectory}/favicon.ico`,
  msapplicationConfig: `${CONFIG.faviconDirectory}/browserconfig.xml`,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E3E3E3' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
}

export const metadata: PageMetadata = {
  metadataBase: new URL(CONFIG.siteURL),
  openGraph: {
    title: CONFIG.siteTitle,
    description: CONFIG.siteDescription,
    // type: 'website',
    url: CONFIG.siteURL,
    images: [
      { url: `${CONFIG.siteURL}/favicons/og-image.png`, },
    ],
  },
  manifest: URLs.manifest,
  icons: {
    icon: [
      { url: URLs[16], sizes: '16x16', type: 'image/png' },
      { url: URLs[32], sizes: '32x32', type: 'image/png' },
    ],
    shortcut: [URLs.favicon],
    apple: [
      { url: URLs.appleTouchIcon, sizes: '180x180' },
    ]
  },
  appleWebApp: {
    startupImage: [
      {
        media: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/390x844@3.png'
      },
      {
        media: 'screen and (prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/390x844@3-dark.png'
      },
      
      {
        media: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/428x926@3.png'
      },
      {
        media: 'screen and (prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/428x926@3-dark.png'
      },
      
      {
        media: 'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/393x852@3.png'
      },
      {
        media: 'screen and (prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/393x852@3-dark.png'
      },
      {
        media: 'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/430x932@3.png'
      },
      {
        media: 'screen and (prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/favicons/splash-screens/430x932@3-dark.png'
      },
    ]
  }
}
