'use client'
import { useState } from 'react'
import styles from '@/components/controls/InteractionButtons.module.css'
import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import { BsCheckSquareFill } from 'react-icons/bs'

export function CookedButton(
  { slug }: { slug: string }
) {
  let cookedRecipes
  if (typeof localStorage !== 'undefined') {
    cookedRecipes = JSON.parse(localStorage.getItem('cookedRecipes') || '{}')
  }

  const [hasCooked, setHasCooked] = useState(cookedRecipes && cookedRecipes[slug])

  const handleClick = () => {
    setHasCooked(!hasCooked)
    let cookedRecipes = JSON.parse(localStorage.getItem('cookedRecipes') || '{}') || {}
    cookedRecipes[slug] = !hasCooked
    localStorage.setItem('cookedRecipes', JSON.stringify(cookedRecipes))
  }

  let classes = [
    styles['cooked-button'],
    styles['interaction-control']
  ];
  if (hasCooked) classes.push(styles['active'])
  return (
    <button
      onClick={handleClick}
      className={classes.join(' ')}
    >
      <div className={styles['active-state']}>
        <BsCheckSquareFill />
      </div>
      <div className={styles['inactive-state']}>
        <BiCheckbox />
      </div>
      <div className={styles['text']}>Cooked</div>
    </button>
  )
}