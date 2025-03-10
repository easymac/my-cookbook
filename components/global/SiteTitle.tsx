import { Link } from 'next-view-transitions'
import CONFIG from '@/cookbook.config'
import { Logo } from './Logo'
import styles from './SiteTitle.module.css'
export function SiteTitle() {
  return (
    <Link className={styles['site-title-wrapper']} href="/">
      <div className={styles['logo']}>
        <Logo />
      </div>
      <h1 className={styles['site-title']}>
        {CONFIG.siteTitle}
      </h1>
    </Link>
  )
}