import InstallPage from '@/app/install/page'
import { Container } from '@/components/ui/Container'
import styles from '@/app/Layout.module.css'

export default function MobilePanelModal({ params }) {
  return (
    <div className={styles['mobile-panel']}>
      <Container>
        <InstallPage params={params} />
      </Container>
    </div>
  )
}
