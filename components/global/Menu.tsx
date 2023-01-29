'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { MenuButton } from '@/components/global/MenuButton'
import styles from './Menu.module.css'

export function MenuWrapperComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <>
      <MenuButton onOpen={open} />
      <Menu isOpen={isOpen} onClose={close} />
    </>
  )
}

export function Menu({ onClose, isOpen }) {
  return (
    <div className={
      `${styles['menu']} ${isOpen ? styles['is-open'] : styles['is-closed']}`
    }>
      <Button onClick={onClose} className={styles['close-button']}>
        <HiArrowLongLeft />
      </Button>
      <div className={styles['menu-list']}>
        <div className={styles['menu-item']}>
          <div className={styles['item-heading']}>Dark mode</div>
          <div className={styles['item-description']}>Toggle dark mode</div>
        </div>
        <Link href="/about" className={styles['menu-item']}>
          <div className={styles['item-heading']}>About</div>
        </Link>
      </div>
    </div>
  )
}
