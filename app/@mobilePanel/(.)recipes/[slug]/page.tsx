import RecipePage from '@/app/recipes/[slug]/page'
import { Container } from '@/components/ui/Container'
import styles from '@/app/Layout.module.css'

export default function MobilePanelModal({ params }: { params: { slug: string } }) {
  const PageComponent = RecipePage as any
  return (
    <div className={styles['mobile-panel']}>
      <Container>
        <PageComponent params={params} />
      </Container>
    </div>
  )
}
