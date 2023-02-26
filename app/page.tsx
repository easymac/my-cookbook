import { Suspense } from 'react'
import { Metadata } from '@cooklang/cooklang-ts'
import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeList } from '@/components/RecipeList'
import { StaticRecipeList } from '@/components/StaticRecipeList'

export default async function Home() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  return (
    <main>
      <Suspense fallback={<StaticRecipeList recipeMetas={recipeMetas} />}>
        <RecipeList recipeMetas={recipeMetas} />
      </Suspense>
    </main>
  )
}
