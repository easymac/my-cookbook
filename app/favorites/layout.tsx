import { Metadata } from 'next'
import CONFIG from '@/cookbook.config'

export const metadata: Metadata = {
  title: `Favorites - ${CONFIG.siteTitle}`,
}

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 