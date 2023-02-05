import styles from './IngredientsList.module.css'

export function IngredientsList(
  { ingredients }: { ingredients: any }
) {
  return (
    <div className={styles['ingredients-list']}>
      <ul>
        {ingredients.map((ingredient: any) => (
          <li key={ingredient.id}>
            <div className={styles['quantity']}>{ingredient.quantity}</div>
            <div className={styles['name']}>{ingredient.units} {ingredient.name}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}