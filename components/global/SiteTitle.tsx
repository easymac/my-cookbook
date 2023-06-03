import Link from 'next/link'
import CONFIG from '@/cookbook.config'
import styles from './Header.module.css'

export function SiteTitle() {
  return (
    <h1 className={styles['site-title']}>
      <Link href="/">{CONFIG.siteTitle}</Link>
    </h1>
  )
}