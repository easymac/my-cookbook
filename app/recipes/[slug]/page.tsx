import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getRecipeBySlug, getAllRecipesMetadata } from '@/lib/recipes'
import { StartCookingButton } from './StartCookingButton'
import { Controls } from './Controls'
import { DescriptionExpander } from './DescriptionExpander'
import { IngredientsList } from './IngredientsList'
import { Instructions } from './Instructions'
import { MetadataFields } from './MetadataFields'
import { RecentlyViewedTracker } from './RecentlyViewedTracker'
import styles from './Recipe.module.css'

import { Recipe, Metadata } from '@cooklang/cooklang-ts'

export const dynamic = 'error'
export default async function Page(
  { params }: { params: { slug: string } },
) {
  const recipe: Recipe = await getRecipeBySlug(params.slug)
  if (!recipe) {
    notFound()
    return null
  }
  const metadata: Metadata = recipe.metadata
  const image = metadata.images.split(', ')[0]
  return (
    <main className={styles.main}>
      <RecentlyViewedTracker slug={metadata.slug} />
      <header className={styles.header}>
        <div className={styles['title-wrapper']}>
          <h1 className={styles.title}>{metadata.title}</h1>
        </div>
        {image !== '' &&
          <div className={styles['image-wrapper']}>
            <Image
              src={image}
              alt={metadata.title}
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>
        }
      </header>
      <div className={[styles['grid-wrapper'], styles['meta-wrapper']].join(' ')}>
        <section className={styles['interaction-controls']}>
          <div className={styles['metadata']}>
            <MetadataFields metadata={metadata} />
          </div>
          <div className={styles['controls']}>
            <Controls metadata={metadata} />
          </div>
        </section>
        <section className={styles['descrption']}>
          <DescriptionExpander description={metadata.description} />
        </section>
      </div>
      <StartCookingButton
        steps={recipe.steps}
        ingredients={recipe.ingredients}
      />
      <div className={styles['grid-wrapper']}>
        <section className={styles['ingredients']}>
          <h2 className={styles['ingredients-title']}>Ingredients</h2>
          <h4 className={styles['yield']}>Yield: {metadata.yield}</h4>
          <IngredientsList ingredients={recipe.ingredients} />
        </section>
        <section className={styles['instructions']}>
          <h2 className={styles['instructions-title']}>Preparation</h2>
          <Instructions steps={recipe.steps} />
        </section>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const recipeMetas = await getAllRecipesMetadata()
  return recipeMetas.map((meta) => ({
    slug: meta.slug,
  }))
}