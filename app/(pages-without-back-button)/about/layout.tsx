import { Metadata } from 'next'
import CONFIG from '@/cookbook.config'

export const metadata: Metadata = {
  title: `About - ${CONFIG.siteTitle}`,
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 