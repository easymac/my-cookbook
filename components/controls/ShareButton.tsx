'use client'
import styles from '@/components/controls/InteractionButtons.module.css'
import { RxShare2 } from 'react-icons/rx'

export function ShareButton() {
  let classes = [
    styles['share-button'],
    styles['interaction-control']
  ]
  return (
    <button className={classes.join(' ')}>
      <RxShare2 />
      <div className={styles['text']}>Share</div>
    </button>
  )
}
