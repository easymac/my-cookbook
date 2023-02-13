import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { TbHeartBroken } from 'react-icons/tb'
import { BiStopwatch } from 'react-icons/bi'
import styles from './NoRecipesFound.module.css'

export function NoRecipesFound({ variant }: { variant: string }) {

  if (variant === 'search') return (
    <div className={styles['no-recipes-found']}>
      <div className={styles['icon']}>
        <FiSearch />
      </div>
      <h3 className={styles['title']}>No recipes found</h3>
      <p className={styles['description']}>
        We couldn&apos;t find any recipes matching your search. Try adjusting
        your filters or search terms, or <Link href="/">view all recipes</Link>.
      </p>
    </div>
  )

  if (variant === 'favorites') return (
    <div className={styles['no-recipes-found']}>
      <div className={styles['icon']}>
        <TbHeartBroken />
      </div>
      <h3 className={styles['title']}>No favorites found</h3>
      <p className={styles['description']}>
        You haven&apos;t favorited any recipes yet. <Link href="/">Go
        back</Link> to see all recipes and add some to your favorites.
      </p>
    </div>
  )

  if (variant === 'recent') return (
    <div className={styles['no-recipes-found']}>
      <div className={styles['icon']}>
        <BiStopwatch />
      </div>
      <h3 className={styles['title']}>No recently viewed recipes</h3>
      <p className={styles['description']}>
        Recipes you view will show up here for easier access. <Link href="/">Go
        back</Link> to view all recipes.
      </p>
    </div>
  )

  return (
    <div className={styles['no-recipes-found']}>
      <h3 className={styles['title']}>No recipes found</h3>
      <p className={styles['description']}>
        We couldn&apos;t find any recipes in this cookbook. Something has gone
        wrong.
      </p>
    </div>
  )
}