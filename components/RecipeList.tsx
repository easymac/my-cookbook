'use client'
import { useSearchParams } from 'next/navigation'
import { RecipeCard } from '@/components/RecipeCard'
import { Metadata } from '@cooklang/cooklang-ts'
import { NoRecipesFound } from '@/components/NoRecipesFound'
import styles from '@/components/RecipeList.module.css'

export function RecipeList(
  { recipeMetas, page }: {
    recipeMetas: Metadata[],
    page?: string
  }
) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const filters = searchParams.get('filters')

  let filteredRecipes = recipeMetas
  if (search) filteredRecipes = filteredRecipes.filter(
    (meta) => meta.title.toLowerCase().includes(search.toLowerCase())
  )
  if (filters) filteredRecipes = filteredRecipes.filter(
    (meta) => filters.split(',').every((filter) => meta.tags.includes(filter))
  )

  if (page === 'favorites' && typeof window !== 'undefined') {
    const favorites = JSON.parse(localStorage.getItem('favoritedRecipes') || '[]') || []
    filteredRecipes = filteredRecipes.filter((meta) => favorites.includes(meta.slug))
  }

  if (page === 'recent' && typeof window !== 'undefined') {
    const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]') || []
    filteredRecipes = filteredRecipes.filter((meta) => recent.includes(meta.slug))
    filteredRecipes.sort((a, b) => recent.indexOf(a.slug) - recent.indexOf(b.slug))
  }

  let noFoundVariant = 'standard';
  if (search || filters) noFoundVariant = 'search'
  if (page === 'favorites') noFoundVariant = 'favorites'
  if (page === 'recent') noFoundVariant = 'recent'

  if (filteredRecipes.length) return (
    <div className={styles['recipe-list']}>
      {filteredRecipes.map((meta) => (
        <RecipeCard key={meta.slug} metadata={meta} />
      ))}
    </div>
  )

  return (
    <div className={styles['recipe-list']}>
      <NoRecipesFound variant={noFoundVariant} />
    </div>
  )
}