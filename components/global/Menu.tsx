'use client'
import { useEffect, useState, useRef, forwardRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { MenuButton } from '@/components/global/MenuButton'
import { DarkModeToggle } from '@/components/global/DarkModeToggle'
import styles from './Menu.module.css'

export function MenuWrapperComponent() {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | FocusEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('focusin', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('focusin', handleClickOutside)
    }
  }, [menuRef])

  return (
    <>
      <MenuButton onOpen={open} />
      <Menu isOpen={isOpen} onClose={close} ref={menuRef} />
    </>
  )
}

export const Menu = forwardRef(function Menu(
  { onClose, isOpen }: { onClose: () => void; isOpen: boolean },
  ref: React.Ref<HTMLDivElement>
) {
  const handleDragStart = () => {
    document.body.style.overflow = 'hidden'
  }
  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 100 || info.velocity.x > 1000) onClose()
    document.body.style.overflow = 'auto'
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag="x"
          onDragStart={handleDragStart}
          dragDirectionLock
          dragPropagataion
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className={styles['menu-wrapper']}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div ref={ref} className={styles['menu']}>
            <Button
              onClick={onClose}
              className={styles['close-button']}
              variant="tertiary"
            >
              <HiArrowLongLeft />
            </Button>
            <div className={styles['menu-list']}>
              <DarkModeToggle />
              <div className={styles['menu-item']}>
                <Link href="/about">
                  <div className={styles['item-heading']}>About</div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
