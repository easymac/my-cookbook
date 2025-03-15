import { Metadata } from 'next'
import CONFIG from '@/cookbook.config'

export const metadata: Metadata = {
  title: `Install - ${CONFIG.siteTitle}`,
}

export default function InstallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 