'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { IngredientsTab } from '@/components/cook-mode/IngredientsTab'
import { DirectionsTab } from '@/components/cook-mode/DirectionsTab'
import styles from '@/components/cook-mode/CookMode.module.css'

export function CookMode({ steps, ingredients, onClose }) {
  const [currentTab, setCurrentTab] = useState('ingredients')
  return (
    <div className={styles['cook-mode-panel']}>
      <Button
        className={styles['back-button']}
        onClick={onClose}
        variant="secondary"
      >
        <HiArrowLongLeft />
      </Button>
      <div className={styles['tabs']}>
        <Button onClick={() => setCurrentTab('ingredients')}>Ingredients</Button>
        <Button onClick={() => setCurrentTab('directions')}>Directions</Button>
      </div>
      <div className={`${styles[`tab-active-${currentTab}`]} ${styles['tab-wrapper']}`}>
        <IngredientsTab ingredients={ingredients} />
        <DirectionsTab steps={steps} />
      </div>
    </div>
  )
}