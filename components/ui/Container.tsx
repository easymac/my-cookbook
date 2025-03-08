import { ReactNode } from 'react'
import styles from '@/components/ui/Container.module.css'

type Props = {
  children: ReactNode
  fullWidth?: boolean
}

export function Container(props: Props) {
  const { children, fullWidth = false } = props

  return (
    <div className={`${styles['container']} ${fullWidth ? styles['full-width'] : ''}`}>
      {children}
    </div>
  )
}