import CONFIG from '@/cookbook.config'

export function SharedHead() {
  const URLs = {
    16: `${CONFIG.faviconDirectory}/favicon-16x16.png`,
    32: `${CONFIG.faviconDirectory}/favicon-32x32.png`,
    48: `${CONFIG.faviconDirectory}/favicon-48x48.png`,
    appleTouchIcon: `${CONFIG.faviconDirectory}/icon-192x192.png`,
    manifest: `${CONFIG.faviconDirectory}/site.webmanifest`,
    favicon: `${CONFIG.faviconDirectory}/favicon.ico`,
    msapplicationConfig: `${CONFIG.faviconDirectory}/browserconfig.xml`,
  }

  return (
    <>
      <link rel="icon" type="image/png" href={URLs[16]} sizes="16x16" />
      <link rel="icon" type="image/png" href={URLs[32]} sizes="32x32" />
      <link rel="icon" type="image/png" href={URLs[48]} sizes="48x48" />
      <link rel="apple-touch-icon" href={URLs.appleTouchIcon} sizes="180x180" />
      <link rel="shortcut icon" href={URLs.favicon} />

      <link rel="manifest" href={URLs.manifest} />
      <meta name="msapplication-config" content={URLs.msapplicationConfig} />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  )
}