import { Suspense } from 'react'
import { SiteTitleOrBackButton } from '@/components/global/SiteTitleOrBackButton'
import { getAllTags } from '@/lib/recipes'
import { MenuWrapperComponent } from '@/components/global/Menu'
import { SearchAndFilter } from '@/components/SearchAndFilter'
import { Container } from '@/components/ui/Container'
import styles from '@/components/global/Header.module.css'

function SearchBarFallback() {
  return (
    <div className={styles['search-bar-fallback']}>
      Search bar fallback
    </div>
  )
}

export function Header() {
  const allTags = getAllTags().join(',')
  return (
    <div className={styles['header-wrapper']}>
      <Container>
        <header className={styles['header']}>
          <div className={styles['header-left']}>
            <SiteTitleOrBackButton />
          </div>
          {/* <div className={styles['header-center']}>
            <Suspense fallback={<SearchBarFallback />}>
              <SearchAndFilter allTags={allTags} />
            </Suspense>
          </div> */}
          <div className={styles['header-right']}>
            <MenuWrapperComponent />
          </div>
        </header>
      </Container>
    </div>
  )
}
