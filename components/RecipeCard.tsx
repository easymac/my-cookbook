import { Link } from 'next-view-transitions-2'
import { Metadata } from '@cooklang/cooklang-ts'
import { Container } from './ui/Container';
import { GiKnifeFork } from 'react-icons/gi'
import styles from '@/components/RecipeCard.module.css'

export function RecipeCard(
  { metadata }:  { metadata: Metadata }
) {
  const image = metadata.images.split(', ')[0];
  return (
    <div className={styles['recipe-card']}>
      <Link href="/recipes/[slug]" as={`/recipes/${metadata.slug}`}>
        {image !== '' ? (
          <div className={styles['image-wrapper']}>
            <img
              src={image}
              alt={metadata.title}
            />
          </div>
        ) : (
          <div className={styles['image-placeholder']}>
            <GiKnifeFork />
          </div>
        )}
        <Container>
          <h3 className={styles['title']}>{metadata.title}</h3>
          <div className={styles['time']}>{metadata.time}</div>
        </Container>
      </Link>
    </div>
  )
}