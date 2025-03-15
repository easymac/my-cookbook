import { Metadata } from 'next'
import CONFIG from '@/cookbook.config'

export const metadata: Metadata = {
  title: `Recently Viewed - ${CONFIG.siteTitle}`,
}

export default function RecentlyViewedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 