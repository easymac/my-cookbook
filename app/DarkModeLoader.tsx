'use client'
import { useEffect } from 'react'

export default function DarkModeLoader() {
  useEffect(() => {
    switch (localStorage.getItem('darkMode')) {
      case 'Auto':
        document.body.classList.remove('dark-theme')
        document.body.classList.remove('light-theme')
        break
      case 'Light':
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
        break
      case 'Dark':
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        break
    }
  }, [])

  return null
}