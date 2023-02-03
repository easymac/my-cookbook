'use client'
import { useContext, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (e) => {
    e.preventDefault();
    const rawSearchParams = new URLSearchParams(searchParams.toString())
    rawSearchParams.set('search', e.target.value)
    router.replace(`/?${rawSearchParams.toString()}`)
  }

  return (
    <input
      type="text"
      onChange={handleSearch}
    />
  )
}