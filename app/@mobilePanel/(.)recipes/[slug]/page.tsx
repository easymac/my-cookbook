import RecipePage from '@/app/recipes/[slug]/page'
import { Container } from '@/components/ui/Container'
import styles from '@/app/Layout.module.css'

import { MobilePanel } from '@/components/global/MobilePanel'

export default function MobilePanelModal({ params }) {
  return (
    <MobilePanel>
      <div className={styles['mobile-panel']}>
        <Container>
          <RecipePage params={params} />
        </Container>
      </div>
    </MobilePanel>
  )
}
