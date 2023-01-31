import Link from 'next/link'
import { Metadata } from '@cooklang/cooklang-ts'

export function RecipeCard(
  { metadata }:  { metadata: Metadata }
) {
  return (
    <div>
      <Link href="/recipes/[slug]" as={`/recipes/${metadata.slug}`}>
        <h3>{metadata.title}</h3>
      </Link>
    </div>
  )
}