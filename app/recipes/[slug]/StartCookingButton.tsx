'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CookMode } from '@/components/cook-mode/CookMode'
import { Step, Ingredient } from '@cooklang/cooklang-ts'
import styles from './Recipe.module.css'

export function StartCookingButton(
  { steps, ingredients }: {
    steps: Step[],
    ingredients: Ingredient[],
  }
) {
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
      
      <CookMode
        onClose={() => setIsCooking(false)}
        visible={isCooking}
        ingredients={ingredients}
        steps={steps}
      />
    </>
  )
}