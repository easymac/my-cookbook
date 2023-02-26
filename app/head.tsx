import CONFIG from '@/cookbook.config'
import { SharedHead } from '@/app/SharedHead'

export default async function Head() {


  return (
    <>
      <title>{CONFIG.siteTitle}</title>
      <meta name="description" content={CONFIG.siteDescription} />
      <meta property="og:title" content={CONFIG.siteTitle} />
      <meta property="og:description" content={CONFIG.siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CONFIG.siteURL} />
      <meta property="og:image" content={`${CONFIG.siteURL}/favicons/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />

      <SharedHead />
    </>
  )
}