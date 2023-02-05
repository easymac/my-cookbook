'use client'
import { useState } from 'react'
import styles from '@/components/controls/InteractionButtons.module.css'
import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import { BsCheckSquareFill } from 'react-icons/bs'

export function CookedButton(
  
) {
  const [hasCooked, setHasCooked] = useState(false)
  let classes = [
    styles['cooked-button'],
    styles['interaction-control']
  ];
  if (hasCooked) classes.push(styles['active'])

  const handleClick = () => {
    setHasCooked(!hasCooked)
  }
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