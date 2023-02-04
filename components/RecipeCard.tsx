import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from '@cooklang/cooklang-ts'
import styles from '@/components/RecipeCard.module.css'

export function RecipeCard(
  { metadata }:  { metadata: Metadata }
) {
  const image = metadata.images.split(', ')[0];
  return (
    <div className={styles['recipe-card']}>
      <Link href="/recipes/[slug]" as={`/recipes/${metadata.slug}`}>
        {image !== '' &&
          <div className={styles['image-wrapper']}>
            <Image
              src={image}
              alt={metadata.title}
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        }
        <h3 className={styles['title']}>{metadata.title}</h3>
        <div className={styles['time']}>{metadata.time}</div>
      </Link>
    </div>
  )
}