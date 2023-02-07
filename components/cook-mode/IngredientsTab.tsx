'use client'
import { useState } from 'react'
import { parseVulgar } from '@/lib/quantity-parser'
import { BiCheckbox } from 'react-icons/bi'
import { BsCheckSquareFill } from 'react-icons/bs'
import styles from '@/components/cook-mode/CookMode.module.css'

export function IngredientsTab({ ingredients }) {
  const [completedIngredients, setCompletedIngredients] = useState([])

  const handleClick = (index) => {
    completedIngredients[index] = !completedIngredients[index]
    setCompletedIngredients([...completedIngredients])
  }

  const completedStyle = (index) => {
    return completedIngredients[index] ? styles['completed'] : ''
  }

  return (
    <div className={styles['ingredients-tab']}>
      {ingredients.map((ingredient, index) => (
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