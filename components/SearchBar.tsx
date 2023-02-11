'use client'
import { useContext, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { MdFilterList } from 'react-icons/md'
import { Button } from '@/components/ui/Button'
import { FilterMenu } from '@/components/FilterMenu'
import styles from '@/components/SearchBar.module.css'

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (e: any) => {
    e.preventDefault();
    const rawSearchParams = new URLSearchParams(searchParams.toString())
    rawSearchParams.set('search', e.target.value)
    router.replace(`/?${rawSearchParams.toString()}`)
  }

  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-icon']}>
        <FiSearch />
      </div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Find a recipe"
      />
      <Button
        className={styles['filter-icon']}
        variant="tertiary"
        onClick={() => {}}
      >
        <MdFilterList />
      </Button>
    </div>
  )
}