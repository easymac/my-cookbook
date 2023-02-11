'use client'
import { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FilterMenu } from '@/components/FilterMenu'
import { useSearchParams } from 'next/navigation'
import styles from '@/components/global/Header.module.css'

export function SearchAndFilter({ allTags }: { allTags: string }) {
  const searchParams = useSearchParams()
  const hasFilters = searchParams.get('filters')
  const [showFilterMenu, setShowFilterMenu] = useState(Boolean(hasFilters))
  const toggleFilterMenu = () => setShowFilterMenu(!showFilterMenu)
  return (
    <div className={styles['search-and-filter']}>
      <SearchBar toggleFilterMenu={toggleFilterMenu} />
      <FilterMenu allTags={allTags.split(',')} visible={showFilterMenu} />
    </div>
  )
}