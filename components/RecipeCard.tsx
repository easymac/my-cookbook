import Link from 'next/link'

export function RecipeCard({ metadata }) {
  return (
    <div>
      <Link href="/recipes/[slug]" as={`/recipes/${metadata.slug}`}>
        <h3>{metadata.title}</h3>
      </Link>
    </div>
  )
}