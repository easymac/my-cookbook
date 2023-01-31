import { ReactNode } from 'react'
import styles from '@/components/ui/Container.module.css'

type Props = {
  children: ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  )
}