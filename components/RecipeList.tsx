'use client'
import { useSearchParams } from 'next/navigation'
import { RecipeCard } from '@/components/RecipeCard'
import { Metadata } from '@cooklang/cooklang-ts'
import styles from '@/components/RecipeList.module.css'

export function RecipeList(
  { recipeMetas }: { recipeMetas: Metadata[] }
) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const filters = searchParams.get('filters')

  let filteredRecipes = recipeMetas
  if (search) filteredRecipes = filteredRecipes.filter(
    (meta) => meta.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles['recipe-list']}>
      {filteredRecipes.map((meta) => (
        <RecipeCard key={meta.slug} metadata={meta} />
      ))}
    </div>
  )
}