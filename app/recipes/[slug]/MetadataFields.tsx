import { Metadata } from '@cooklang/cooklang-ts'
import { LinkIfLink } from '@/components/ui/LinkIfLink'
import styles from './Recipe.module.css'

export function MetadataFields(
  { metadata }: { metadata: Metadata } 
) {

  // The fields we want to display, in order:
  const fields = [
    'author',
    'source',
    'time',
  ]
    .filter((field: string) => metadata.hasOwnProperty(field))
    .map((field: string) => (
      <MetadataField key={field} label={field} value={(metadata as unknown as Metadata)[field]} />
    ))

  return (
    <div className={styles['metadata']}>
      {fields}
    </div>
  )
}

function MetadataField({ label, value }: { label: string, value: string }) {
  label = label.charAt(0).toUpperCase() + label.slice(1)
  return (
    <div className={styles['metadata-field']}>
      <span className={styles['metadata-field-label']}>{label}:</span>
      <span className={styles['metadata-field-value']}>
        <LinkIfLink>{value}</LinkIfLink>
      </span>
    </div>
  )
}
