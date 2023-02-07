'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CookMode } from '@/components/cook-mode/CookMode'
import styles from './Recipe.module.css'

export function StartCookingButton({ steps, ingredients }) {
  const [isCooking, setIsCooking] = useState(false)
  return (
    <>
      <Button
        variant="accent"
        size="large"
        className={styles['start-cooking']}
        onClick={() => setIsCooking(true)}
      >
        Start cooking
      </Button>
      {
        isCooking &&
        <CookMode steps={steps} ingredients={ingredients} onClose={() => setIsCooking(false)} />
      }
    </>
  )
}