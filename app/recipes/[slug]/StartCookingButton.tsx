'use client'
import { Button } from '@/components/ui/Button'
import styles from './Recipe.module.css'

export function StartCookingButton() {
  return (
    <Button
      variant="accent"
      size="large"
      className={styles['start-cooking']}
      onClick={() => {}}
    >
      Start cooking
    </Button>
  )
}