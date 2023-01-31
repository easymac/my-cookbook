import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeCard } from '@/components/RecipeCard'
import { Metadata } from '@cooklang/cooklang-ts'

export default async function Home() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  return (
    <main>
      <h1>Hello world</h1>
      {recipeMetas.map((meta) => (
        <RecipeCard key={meta.slug} metadata={meta} />
      ))}
    </main>
  )
}
