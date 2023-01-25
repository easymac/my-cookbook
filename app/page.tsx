import { getAllRecipesMetadata } from '@/lib/recipes'
import styles from './page.module.css'


export default async function Home() {
  const recipes = await getAllRecipesMetadata()
  console.log(recipes);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello world</h1>
      {recipes.map((recipe) => (
        <pre key={recipe.slug}>
          {JSON.stringify(recipe, null, 2)}
        </pre>
      ))}
    </main>
  )
}
