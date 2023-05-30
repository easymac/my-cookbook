'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useMobilePanelContext } from '@/app/MobilePanelContext'

export function MobilePanel({
  children
}: {
  children: React.ReactNode
}) {
  const { isOpen, setIsOpen } = useMobilePanelContext()

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 100 || info.velocity.x > 1000) setIsOpen(false)
  }

  const handleAnimationComplete = ({ x }) => {
    if (x === '100%') {
      window.history.back()
    }
  }

  const segments = useSelectedLayoutSegment('mobilePanel')
  useEffect(() => {
    if (segments === '(.)recipes') setIsOpen(true)
  }, [segments, setIsOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
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
}
