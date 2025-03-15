import CONFIG from '@/cookbook.config'
import { Metadata, Viewport } from 'next'

export function getSharedMetadata(): Partial<Metadata> {
  const URLs = {
    16: `${CONFIG.faviconDirectory}/favicon-16x16.png`,
    32: `${CONFIG.faviconDirectory}/favicon-32x32.png`,
    48: `${CONFIG.faviconDirectory}/favicon-48x48.png`,
    appleTouchIcon: `${CONFIG.faviconDirectory}/icon-192x192.png`,
    manifest: `${CONFIG.faviconDirectory}/site.webmanifest`,
    favicon: `${CONFIG.faviconDirectory}/favicon.ico`,
    msapplicationConfig: `${CONFIG.faviconDirectory}/browserconfig.xml`,
  }

  return {
    icons: {
      icon: [
        { url: URLs.favicon },
        { url: URLs[16], sizes: '16x16', type: 'image/png' },
        { url: URLs[32], sizes: '32x32', type: 'image/png' },
        { url: URLs[48], sizes: '48x48', type: 'image/png' },
      ],
      apple: [
        { url: URLs.appleTouchIcon, sizes: '180x180' },
      ],
      shortcut: URLs.favicon,
    },
    manifest: URLs.manifest,
    other: {
      'msapplication-config': URLs.msapplicationConfig,
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
    },
  }
}

export function getSharedViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}