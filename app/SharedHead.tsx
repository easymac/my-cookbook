import CONFIG from '@/cookbook.config'

export function SharedHead() {
  const URLs = {
    16: `${CONFIG.faviconDirectory}/favicon-16x16.png`,
    32: `${CONFIG.faviconDirectory}/favicon-32x32.png`,
    appleTouchIcon: `${CONFIG.faviconDirectory}/apple-touch-icon.png`,
    manifest: `${CONFIG.faviconDirectory}/site.webmanifest`,
    favicon: `${CONFIG.faviconDirectory}/favicon.ico`,
    msapplicationConfig: `${CONFIG.faviconDirectory}/browserconfig.xml`,
  }

  return (
    <>
      <link rel="icon" type="image/png" href={URLs[16]} sizes="16x16" />
      <link rel="icon" type="image/png" href={URLs[32]} sizes="32x32" />
      <link rel="apple-touch-icon" href={URLs.appleTouchIcon} sizes="180x180" />
      <link rel="shortcut icon" href={URLs.favicon} />

      <link rel="manifest" href={URLs.manifest} />
      <meta name="msapplication-config" content={URLs.msapplicationConfig} />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* 
        Splash screens for iOS
        Supports the iPhone 12 lineup to the iPhone 14 lineup, excluding Minis
      */}
      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/390x844@3.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/390x844@3-dark.png"
      />

      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/428x926@3.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/428x926@3-dark.png"
      />

      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/393x852@3.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/393x852@3-dark.png"
      />

      <link
        rel="apple-touch-startup-image"
        media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/430x932@3.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="screen and (prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        href="/favicons/splash-screens/430x932@3-dark.png"
      />
    </>
  )
}