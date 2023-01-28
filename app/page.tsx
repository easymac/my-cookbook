import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeCard } from '@/components/RecipeCard'

export default async function Home() {
  const recipeMetas = await getAllRecipesMetadata()
  return (
    <main>
      <h1>Hello world</h1>
      {recipeMetas.map((meta) => (
        <RecipeCard key={meta.slug} metadata={meta} />
      ))}
    </main>
  )
}
