'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { IngredientsTab } from '@/components/cook-mode/IngredientsTab'
import { DirectionsTab } from '@/components/cook-mode/DirectionsTab'
import styles from '@/components/cook-mode/CookMode.module.css'
import { Step, Ingredient } from '@cooklang/cooklang-ts'

export function CookMode(
  { steps, ingredients, onClose, visible }: {
    steps: Step[],
    ingredients: Ingredient[],
    onClose: () => void,
    visible: boolean,
  }) {
  const [currentTab, setCurrentTab] = useState('ingredients')

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 100 || info.velocity.x > 1000) onClose()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          drag="x"
          dragPropagation
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className={styles['cook-mode-panel-wrapper']}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
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
            <div
              className={`${styles[`tab-active-${currentTab}`]} ${styles['tab-wrapper']}`}
              onPointerDownCapture={e => e.stopPropagation()}
            >
              <IngredientsTab ingredients={ingredients} />
              <DirectionsTab steps={steps} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}