'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useSearchParams, useRouter } from 'next/navigation'
import styles from './FilterMenu.module.css'

export function FilterMenu(
  { allTags, visible }: { allTags: string[]; visible: boolean }
) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const rawSearchParams = searchParams
    ? new URLSearchParams(searchParams.toString())
    : new URLSearchParams()
  const filters = searchParams && searchParams.get('filters')


  const handleClear = () => {
    rawSearchParams.delete('filters')
    router.replace(`/?${rawSearchParams.toString()}`)
  }
  
  const handleFilter = (tag: string) => {
    const filtersArray = filters ? filters.split(',') : []
    if (filtersArray.includes(tag)) {
      rawSearchParams.set('filters', filtersArray.filter((filter) => filter !== tag).join(','))
    } else {
      rawSearchParams.set('filters', filtersArray.concat(tag).join(','))
    }
    router.replace(`/?${rawSearchParams.toString()}`)
  }

  const getFilterButtonClass = (tag: string) => {
    const filtersArray = filters ? filters.split(',') : []
    if (filtersArray.includes(tag)) {
      return `${styles['filter-button-active']} ${styles['filter-button']}`
    } else {
      return styles['filter-button']
    }
  }

  let classes = styles['filter-menu']
  if (visible) classes += ` ${styles['filter-menu-visible']}`
  return (
    <div className={classes}>
      <div className={styles['filter-menu-header']}>
        <h3>Filters</h3>
        <Button onClick={handleClear}>Clear</Button>
      </div>
      <div className={styles['filter-menu-body']}>
        {allTags.map((tag) => (
          <Button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={getFilterButtonClass(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  )
}