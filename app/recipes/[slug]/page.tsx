import Image from 'next/image'
import { getRecipeBySlug, getAllRecipesMetadata } from '@/lib/recipes'
import { StartCookingButton } from './StartCookingButton'
import { Controls } from './Controls'
import { DescriptionExpander } from './DescriptionExpander'
import { IngredientsList } from './IngredientsList'
import { Instructions } from './Instructions'
import styles from './Recipe.module.css'

export const dynamic = 'error'
export default async function Page(
  { params }: { params: { slug: string } },
) {
  const recipe = await getRecipeBySlug(params.slug)
  const metadata = recipe.metadata
  const image = metadata.images.split(', ')[0]
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        {image !== '' &&
          <div className={styles['image-wrapper']}>
            <Image
              src={image}
              alt={metadata.title}
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        }
        <h1 className={styles.title}>{metadata.title}</h1>
      </header>
      <section className={styles['interaction-controls']}>
        <Controls />
      </section>
      <section className={styles['descrption']}>
        <DescriptionExpander description={metadata.description} />
      </section>
      <StartCookingButton />
      <section className={styles['ingredients']}>
        <h2 className={styles['ingredients-title']}>Ingredients</h2>
        <IngredientsList ingredients={recipe.ingredients} />
      </section>
      <section className={styles['instructions']}>
        <h2 className={styles['instructions-title']}>Preparation</h2>
        <Instructions steps={recipe.steps} />
      </section>
      <StartCookingButton />
    </main>
  )
}

export async function generateStaticParams() {
  const recipeMetas = await getAllRecipesMetadata()
  return recipeMetas.map((meta) => ({
    slug: meta.slug,
  }))
}