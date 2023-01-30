'use client'
import { useEffect, useState } from 'react'
import styles from './Menu.module.css'

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState('Auto')
  const options = ['Auto', 'Light', 'Dark']

  const toggleDarkMode = (target) => {
    const index = options.indexOf(darkMode)
    const nextIndex = index === options.length - 1 ? 0 : index + 1
    target = target || options[nextIndex]
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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleDarkMode()
    }
  }

  const handleClick = () => {
    toggleDarkMode()
  }

  useEffect(() => {;
    setDarkMode(localStorage.getItem('darkMode'))
    toggleDarkMode(localStorage.getItem('darkMode'));
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