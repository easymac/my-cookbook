'use client'
import { useState } from 'react'
import { parseVulgar } from '@/lib/quantity-parser'
import { BiCheckbox } from 'react-icons/bi'
import { BsCheckSquareFill } from 'react-icons/bs'
import styles from '@/components/cook-mode/CookMode.module.css'
import { Ingredient } from '@cooklang/cooklang-ts'

export function IngredientsTab({ ingredients }: { ingredients: Ingredient[] }) {
  const [completedIngredients, setCompletedIngredients] = useState([] as boolean[])

  const handleClick = (index: number) => {
    completedIngredients[index] = !completedIngredients[index]
    setCompletedIngredients([...completedIngredients])
  }

  const completedStyle = (index: number) => {
    return completedIngredients[index] ? styles['completed'] : ''
  }

  return (
    <div className={styles['ingredients-tab']}>
      {ingredients.map((ingredient: Ingredient, index: number) => (
        <div
          key={index}
          className={[
            styles['ingredient'],
            completedStyle(index),
          ].join(' ')}
          onClick={() => handleClick(index)}
        >
          <div className={`${styles['checkbox']}`}>
            {
              completedIngredients[index] ? (
                <BsCheckSquareFill />
              ) : (
                <BiCheckbox />
              )
            }
          </div>
          <div className={styles['ingredient-text']}>
            {parseVulgar(ingredient.quantity)} {ingredient.name}
          </div>
        </div>
      ))}
    </div>
  )
}