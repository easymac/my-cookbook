import { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from '@cooklang/cooklang-ts'
import { getAllRecipesMetadata } from '@/lib/recipes'
import { RecipeList } from '@/components/RecipeList'
import { StaticRecipeList } from '@/components/StaticRecipeList'
import { InstallAppBanner } from '@/components/InstallAppBanner'


export default async function Home() {
  const recipeMetas: Metadata[] = await getAllRecipesMetadata()
  return (
    <main>
      <Suspense fallback={<StaticRecipeList recipeMetas={recipeMetas} />}>
        <InstallAppBanner />
        <RecipeList recipeMetas={recipeMetas} />
      </Suspense>
    </main>
  )
}
