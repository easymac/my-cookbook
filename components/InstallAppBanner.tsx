'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { GrFormClose } from 'react-icons/gr'
import styles from './InstallAppBanner.module.css'

export function InstallAppBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /iphone|ipad|ipod/.test(userAgent)
    }
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator['standalone'])
    if (isIos() && !isInStandaloneMode()) {
      setIsVisible(true)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0, maxHeight: 0 }}
          animate={{ y: 0, opacity: 1, maxHeight: 100 }}
          exit={{ y: -100, opacity: 0, maxHeight: 0 }}
          className={styles['install-app-banner']}
        >
          <Link className={styles['banner-link']} href="/install">
            <div className={styles['banner']}>
              <div className={styles['banner-text']}>
                <span>Install this app</span> &rarr;
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}