import { SiteTitleOrBackButton } from '@/components/global/SiteTitleOrBackButton'
import { getAllTags } from '@/lib/recipes'
import { MenuWrapperComponent } from '@/components/global/Menu'
import { SearchAndFilter } from '@/components/SearchAndFilter'
import styles from '@/components/global/Header.module.css'

export function Header() {
  const allTags = getAllTags().join(',')
  return (
    <header className={styles['header']}>
      <div className={styles['header-left']}>
        <SiteTitleOrBackButton />
      </div>
      <div className={styles['header-center']}>
        <SearchAndFilter allTags={allTags} />
      </div>
      <div className={styles['header-right']}>
        <MenuWrapperComponent />
      </div>
    </header>
  )
}
