import styles from '@/components/ui/Container.module.css'

export function Container({ children }) {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  )
}