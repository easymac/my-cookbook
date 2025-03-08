'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './Recipe.module.css'

export function DescriptionExpander(
  { description }: { description: string }
) {
  const [isExpanded, setIsExpanded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  let classes = [styles['description-expander']]
  if (isExpanded) classes.push(styles['expanded'])

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    const setDescriptionHeight = () => {
      if (descriptionRef.current && wrapperRef.current) {
        const height = descriptionRef.current.clientHeight
        wrapperRef.current.style.setProperty('--description-height', `${height}px`)
      }
    }

    setDescriptionHeight()
    window.addEventListener('resize', setDescriptionHeight)
    return () => window.removeEventListener('resize', setDescriptionHeight)
  }, [description])

  return (
    <div
      onClick={handleClick}
      className={classes.join(' ')}
      ref={wrapperRef}
    >
      <div className={styles.description} ref={descriptionRef}>
        {description}
      </div>
    </div>
  )
}