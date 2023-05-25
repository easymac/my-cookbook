import { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from '@cooklang/cooklang-ts'
import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeList } from '@/components/RecipeList'
import { StaticRecipeList } from '@/components/StaticRecipeList'


export default async function Home() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  return (
    <main>
      <Suspense fallback={<StaticRecipeList recipeMetas={recipeMetas} />}>
        <Link href="/install">Install this app</Link>
        <RecipeList recipeMetas={recipeMetas} />
      </Suspense>
    </main>
  )
}
