'use client'
import { useState } from 'react'
import styles from '@/components/controls/InteractionButtons.module.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export function FavoritedButton(
  { slug }: { slug: string }
) {
  const favoritedRecipes = JSON.parse(localStorage.getItem('favoritedRecipes') || '[]')
  const [isFavorited, setIsFavorited] = useState(favoritedRecipes?.includes(slug))
  let classes = [
    styles['favorited-button'],
    styles['interaction-control']
  ];
  if (isFavorited) classes.push(styles['active'])

  const handleClick = () => {
    setIsFavorited(!isFavorited)
    let favoritedRecipes = JSON.parse(localStorage.getItem('favoritedRecipes') || '[]')
    if (isFavorited) {
      favoritedRecipes = favoritedRecipes.filter((favoritedSlug: string) => favoritedSlug !== slug)
    } else {
      favoritedRecipes.push(slug)
    }
    localStorage.setItem('favoritedRecipes', JSON.stringify(favoritedRecipes))
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