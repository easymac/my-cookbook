import Head from 'next/head';
import CONFIG from '@/cookbook.config';

export function SiteHead({ 
  title = CONFIG.siteTitle,
  description = CONFIG.siteDescription,
}) {
  const siteURL = CONFIG.siteURL || '';
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicons and app icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      
      {/* PWA manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}/icons/og-image.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}/icons/og-image.png`} />
      
      {/* Theme color */}
      <meta name="theme-color" content={CONFIG.themeColor} />
    </Head>
  );
} 