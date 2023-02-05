'use client'
import { useState } from 'react'
import styles from '@/components/controls/InteractionButtons.module.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export function FavoritedButton(
  
) {
  const [isFavorited, setIsFavorited] = useState(false)
  let classes = [
    styles['favorited-button'],
    styles['interaction-control']
  ];
  if (isFavorited) classes.push(styles['active'])

  const handleClick = () => {
    setIsFavorited(!isFavorited)
  }
  return (
    <button
      onClick={handleClick}
      className={classes.join(' ')}
    >
      <div className={styles['active-state']}>
        <AiFillHeart />
      </div>
      <div className={styles['inactive-state']}>
        <AiOutlineHeart />
      </div>
      <div className={styles['text']}>Favorited</div>
    </button>
  )
}