import { CookedButton } from '@/components/controls/CookedButton'
import { FavoritedButton } from '@/components/controls/FavoritedButton'
import { ShareButton } from '@/components/controls/ShareButton'
import { Metadata } from '@cooklang/cooklang-ts'
import styles from './Controls.module.css'

export function Controls({ metadata }: { metadata: Metadata }) {
  return (
    <div className={styles['controls']}>
      <CookedButton slug={metadata.slug} />
      <FavoritedButton slug={metadata.slug} />
      <ShareButton metadata={metadata} />
    </div>
  )
}
