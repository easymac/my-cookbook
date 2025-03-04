'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'
import { useMobilePanelContext } from '@/app/MobilePanelContext'
import styles from '@/app/Layout.module.css'

export function MobilePanel({
  children
}: {
  children: React.ReactNode
}) {
  const { isOpen, setIsOpen } = useMobilePanelContext()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 100 || info.velocity.x > 1000) setIsOpen(false)
  }

  const handleAnimationComplete = ({ x }: { x: any }) => {
    if (x === '100%') {
      window.history.back()
    }
  }

  const segments = useSelectedLayoutSegment('mobilePanel')
  useEffect(() => {
    if (segments === '(.)recipes') setIsOpen(true)
    if (segments === '(.)install') setIsOpen(true)
  }, [segments, setIsOpen])

  if (isMobile) return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles['mobile-panel-motion-div']}
          key="mobile-panel"
          drag="x"
          onDragStart={() => {}}
          dragDirectionLock
          dragPropagation
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {isOpen && children}
    </>
  )
}
