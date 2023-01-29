import { SiteTitle } from '@/components/global/SiteTitle'
import { MenuWrapperComponent } from '@/components/global/Menu'
import { SearchBar } from '@/components/SearchBar'
import styles from '@/components/global/Header.module.css'

export function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header-left']}>
        <SiteTitle />
      </div>
      <div className={styles['header-center']}>
        <SearchBar />
      </div>
      <div className={styles['header-right']}>
        <MenuWrapperComponent />
      </div>
    </header>
  )
}
