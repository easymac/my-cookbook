'use client'
import { useEffect } from 'react'

export function RecentlyViewedTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '') || []
    const result = recentlyViewed.filter((recentSlug: string) => recentSlug !== slug)
    result.unshift(slug)
      
    localStorage.setItem('recentlyViewed', JSON.stringify(result))
  }, [slug])

  return null
}