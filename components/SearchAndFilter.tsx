'use client'
import { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FilterMenu } from '@/components/FilterMenu'
import styles from '@/components/global/Header.module.css'

export function SearchAndFilter({ allTags }: { allTags: string }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  return (
    <div className={styles['search-and-filter']}>
      <SearchBar />
      <FilterMenu allTags={allTags.split(',')} visible={showFilterMenu} />
    </div>
  )
}