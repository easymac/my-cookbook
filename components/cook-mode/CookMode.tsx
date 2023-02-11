'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { IngredientsTab } from '@/components/cook-mode/IngredientsTab'
import { DirectionsTab } from '@/components/cook-mode/DirectionsTab'
import styles from '@/components/cook-mode/CookMode.module.css'

export function CookMode({ steps, ingredients, onClose, visible }) {
  const [currentTab, setCurrentTab] = useState('ingredients')

  const handleDragEnd = (e, info) => {
    if (info.offset.x > 100 || info.velocity.x > 1000) onClose()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          drag="x"
          dragPropagataion
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className={styles['cook-mode-panel-wrapper']}
        >
          <div className={styles['cook-mode-panel']}>
            <Button
              className={styles['back-button']}
              onClick={onClose}
              variant="secondary"
            >
              <HiArrowLongLeft />
            </Button>
            <div className={styles['tabs']}>
              <Button
                onClick={() => setCurrentTab('ingredients')}
                className={`${styles['tab-button']} ${currentTab === 'ingredients' ? styles['tab-active'] : ''}`}
                size="large"
              >
                Ingredients
              </Button>
              <Button
                onClick={() => setCurrentTab('directions')}
                className={`${styles['tab-button']} ${currentTab === 'directions' ? styles['tab-active'] : ''}`}
                size="large"
              >
                Directions
              </Button>
            </div>
            <div className={`${styles[`tab-active-${currentTab}`]} ${styles['tab-wrapper']}`}>
              <IngredientsTab ingredients={ingredients} />
              <DirectionsTab steps={steps} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}