import InstallPage from '@/app/install/page'
import { Container } from '@/components/ui/Container'
import styles from '@/app/Layout.module.css'

export default function MobilePanelModal() {
  return (
    <div className={styles['mobile-panel']}>
      <Container>
        <InstallPage />
      </Container>
    </div>
  )
}
