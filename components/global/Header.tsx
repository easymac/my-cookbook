import { BackButton } from '@/components/ui/BackButton'
import { SiteTitle } from '@/components/global/SiteTitle'
import { MenuWrapperComponent } from '@/components/global/Menu'
import { Container } from '@/components/ui/Container'
import styles from '@/components/global/Header.module.css'

export function Header({ showBackButton }: { showBackButton: boolean }) {
  return (
    <div className={styles['header-wrapper']}>
      <Container>
        <header className={styles['header']}>
          <div className={styles['header-left']}>
            {showBackButton ? <BackButton /> : <SiteTitle />}
          </div>
          <div className={styles['header-right']}>
            <MenuWrapperComponent />
          </div>
        </header>
      </Container>
    </div>
  )
}
