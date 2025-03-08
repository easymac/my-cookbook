import CONFIG from '@/cookbook.config'
import { getRecipeBySlug } from '@/lib/recipes'
import { SharedHead } from '@/app/SharedHead'

export default async function Head(
  { params }: { params: { slug: string } }
) {
  const recipe = await getRecipeBySlug(params.slug)
  if (!recipe) return null
  const metadata = recipe.metadata
  const image = metadata.images.split(', ')[0]
  
  // Weird fix: for some reason, the title is not correctly set
  // when two variables are inside the JSX. .... ... ?
  const title = `${metadata.title} - ${CONFIG.siteTitle}`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${CONFIG.siteURL}/recipes/${metadata.slug}`} />
      {image !== '' ? (
        <meta property="og:image" content={image} />
      ) : (
        <meta property="og:image" content={`${CONFIG.siteURL}/favicons/og-image.png`} />
      )}
      <meta name="twitter:card" content="summary_large_image" />

      <SharedHead />
    </>
  )
}