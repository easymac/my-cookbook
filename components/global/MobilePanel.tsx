'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function MobilePanel({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      key="mobile-panel"
      drag="x"
      onDragStart={() => {}}
      dragDirectionLock
      dragPropagation
      dragSnapToOrigin
      onDragEnd={() => {}}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
    >
      {children}
    </motion.div>
)
}
