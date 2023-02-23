'use client'
import { useState } from 'react'
import styles from '@/components/cook-mode/CookMode.module.css'
import { Step } from '@cooklang/cooklang-ts'

export function DirectionsTab({ steps }: { steps: Step[] }) {
  const [currentStep, setCurrentStep] = useState(0)

  const formatStep = (step: Step) => {
    const fragments = step.map((part: any) => {
      if (part.type === 'text') return part.value
      if (part.type === 'ingredient') return part.name
      if (part.type === 'timer') return `${part.quantity} ${part.units}`
    })
    return fragments.join('')
  }

  const handleClick = (index: number) => setCurrentStep(index)

  return (
    <div className={styles['directions-tab']}>
      {steps.map((step: Step, index) => (
        <div
          key={index}
          className={[
            styles['step'],
            index === currentStep ? styles['active'] : '',
            currentStep > index ? styles['completed'] : '',
          ].join(' ')}
          onClick={() => handleClick(index)}
        >
          <div className={styles['step-number']}>
            Step {index + 1}
          </div>
          <div className={styles['step-text']}>
            {formatStep(step)}
          </div>
        </div>
      ))}
    </div>
  )
}