'use client'
import { useEffect, useState } from 'react'
import styles from './Menu.module.css'

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<'Auto' | 'Light' | 'Dark'>('Auto')
  const options = ['Auto', 'Light', 'Dark'] as const

  const toggleDarkMode = (target: typeof options[number] = options[(options.indexOf(darkMode) + 1) % options.length]) => {
    setDarkMode(target)

    if (target === 'Auto') {
      document.body.classList.remove('dark-theme')
      document.body.classList.remove('light-theme')
    }

    if (target === 'Light') {
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
    }

    if (target === 'Dark') {
      document.body.classList.remove('light-theme')
      document.body.classList.add('dark-theme')
    }

    localStorage.setItem('darkMode', target)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      toggleDarkMode()
    }
  }

  const handleClick = () => {
    toggleDarkMode()
  }

  useEffect(() => {
    const currentDarkMode = localStorage.getItem('darkMode')
    if (currentDarkMode) {
      setDarkMode(localStorage.getItem('darkMode') as typeof options[number] || 'Auto')
      toggleDarkMode(localStorage.getItem('darkMode') as typeof options[number])
    } else {
      setDarkMode('Auto')
      toggleDarkMode('Auto')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={styles['menu-item']}
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <div className={styles['item-heading']}>Dark mode</div>
      <div className={styles['item-description']}>{darkMode}</div>
    </div>
  )
}