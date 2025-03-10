import { Button } from '@/components/ui/Button'
import styles from '@/components/global/Menu.module.css'
import MenuIcon from '@/icons/menu-icon'

export function MenuButton({ onOpen }: { onOpen: () => void }) {
  return (
    <Button onClick={onOpen} className={styles['menu-button']}>
      <MenuIcon />
    </Button>
  )
}