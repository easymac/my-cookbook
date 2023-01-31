import { getRecipeBySlug } from '@/lib/recipes'
import styles from './Recipe.module.css'

export const dynamic = 'error'
export default async function Page(
  { params }: { params: { slug: string } },
) {
  const recipe = await getRecipeBySlug(params.slug)
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{'title'}</h1>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>
    </main>
  )
}