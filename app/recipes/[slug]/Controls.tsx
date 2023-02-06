import { CookedButton } from '@/components/controls/CookedButton'
import { FavoritedButton } from '@/components/controls/FavoritedButton'
import { ShareButton } from '@/components/controls/ShareButton'
import styles from './Controls.module.css'

export function Controls() {
  return (
    <div className={styles['controls']}>
      <CookedButton />
      <FavoritedButton />
      <ShareButton />
    </div>
  )
}