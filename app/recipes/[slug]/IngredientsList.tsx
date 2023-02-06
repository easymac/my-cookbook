import { parseVulgar } from '@/lib/quantity-parser'
import styles from './IngredientsList.module.css'

export function IngredientsList(
  { ingredients }: { ingredients: any }
) {
  return (
    <ul className={styles['ingredients-list']}>
      {ingredients.map((ingredient: any) => (
        <li key={ingredient.name}>
          <div className={styles['quantity']}>
            {parseVulgar(ingredient.quantity)}
          </div>
          <div className={styles['name']}>
            {/* <span className={styles['pre-space']}> </span> */}
            {
              [ingredient.units, ingredient.name]
                .filter(x => x !== '')
                .join(' ')
            }
          </div>
        </li>
      ))}
    </ul>
  )
}