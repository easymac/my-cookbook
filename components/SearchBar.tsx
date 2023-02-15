'use client'
import { useContext, useState, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { MdFilterList } from 'react-icons/md'
import { Button } from '@/components/ui/Button'
import { FilterMenu } from '@/components/FilterMenu'
import styles from '@/components/SearchBar.module.css'

export function SearchBar({ toggleFilterMenu }: { toggleFilterMenu: () => void}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const updateSearchParams = (value: string) => {
    const rawSearchParams = new URLSearchParams(searchParams.toString())
    rawSearchParams.set('search', value)
    router.replace(`/?${rawSearchParams.toString()}`)
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    updateSearchParams(search)
    inputRef.current?.blur()
  }

  const handleChange = (e: any) => {
    console.log(pathname)
    setSearch(e.target.value)
    if (pathname === '/') {
      updateSearchParams(e.target.value)
    }
  }

  let classes = [styles['search-bar']]
  if (pathname.startsWith('/recipes/')) {
    classes.push(styles['search-bar--recipe'])
  }
  return (
    <div className={classes.join(' ')}>
      <div className={styles['search-icon']}>
        <FiSearch />
      </div>
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          onChange={handleChange}
          placeholder="Find a recipe"
          value={search}
          inputMode="search"
        />
      </form>
      <Button
        className={styles['filter-icon']}
        variant="tertiary"
        onClick={toggleFilterMenu}
      >
        <MdFilterList />
      </Button>
    </div>
  )
}