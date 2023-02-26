'use client'
import { RecipeCard } from '@/components/RecipeCard'
import { Metadata } from '@cooklang/cooklang-ts'
import { NoRecipesFound } from '@/components/NoRecipesFound'
import styles from '@/components/RecipeList.module.css'

export function StaticRecipeList(
  { recipeMetas }: { recipeMetas: Metadata[] }
) {
  if (recipeMetas.length) return (
    <div className={styles['recipe-list']}>
      {recipeMetas.map((meta) => (
        <RecipeCard key={meta.slug} metadata={meta} />
      ))}
    </div>
  )

  return (
    <div className={styles['recipe-list']}>
      <NoRecipesFound variant={'standard'} />
    </div>
  )
}