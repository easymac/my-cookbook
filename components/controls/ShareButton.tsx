'use client'
import styles from '@/components/controls/InteractionButtons.module.css'
import { RxShare2 } from 'react-icons/rx'
import { Metadata } from '@cooklang/cooklang-ts'

export function ShareButton({ metadata }: { metadata: Metadata }) {
  let classes = [
    styles['share-button'],
    styles['interaction-control']
  ]

  const handleClick = () => {
    if (!navigator.share) {
      return
    }
    navigator.share({
      title: metadata.title,
      text: metadata.description,
      url: window.location.href,
    })
  }

  return (
    <button onClick={handleClick} className={classes.join(' ')}>
      <RxShare2 />
      <div className={styles['text']}>Share</div>
    </button>
  )
}
