import { getAllRecipes } from '@/lib/recipes'
import styles from './page.module.css'


export default async function Home() {
  const recipes = await getAllRecipes()
  console.log(recipes);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello world</h1>
      {recipes.map((recipe) => (
        <div key={recipe.slug}>
          {JSON.stringify(recipe)}
        </div>
      ))}
    </main>
  )
}
