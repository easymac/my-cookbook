import { Metadata } from '@cooklang/cooklang-ts'
import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeList } from '@/components/RecipeList'

export default async function Favorites() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  return (
    <main>
      <RecipeList recipeMetas={recipeMetas} page="favorites" />
    </main>
  )
}