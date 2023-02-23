'use client'
import { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FilterMenu } from '@/components/FilterMenu'
import { useSearchParams, usePathname } from 'next/navigation'
import styles from '@/components/global/Header.module.css'

export function SearchAndFilter({ allTags }: { allTags: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const hasFilters = searchParams.get('filters')
  const [showFilterMenu, setShowFilterMenu] = useState(Boolean(hasFilters))
  const toggleFilterMenu = () => setShowFilterMenu(!showFilterMenu)
  let classes = [styles['search-and-filter']]
  if (pathname && pathname.startsWith('/recipes/')) {
    classes.push(styles['search-and-filter--recipe'])
  }
  return (
    <div className={classes.join(' ')}>
      <SearchBar toggleFilterMenu={toggleFilterMenu} />
      <FilterMenu allTags={allTags.split(',')} visible={showFilterMenu} />
    </div>
  )
}