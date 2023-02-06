import styles from './Instructions.module.css'

export function Instructions(
  { steps }: { steps: any }
) {
  const formatStep = (step: any) => {
    
    const fragments = step.map((part) => {
      if (part.type === 'text') return part.value
      if (part.type === 'ingredient') return part.name
      if (part.type === 'timer') return `${part.quantity} ${part.units}`
    })

    return (
      <div className={styles['step']}>
        {fragments.join('')}
      </div>
    )
  }
  return (
    <ol className={styles['instructions']}>
      {steps.map((step: any, i: number) => (
        <li key={i}>
          <h4 className={styles['step-number']}>
            Step {i + 1}
          </h4>
          {formatStep(step)}
        </li>
      ))}
    </ol>
  )
}