import { TbMenu } from 'react-icons/tb'
import { Button } from '@/components/ui/Button'
import styles from '@/components/global/Menu.module.css'

export function MenuButton({ onOpen }: { onOpen: () => void }) {
  return (
    <Button onClick={onOpen} className={styles['menu-button']}>
      <TbMenu />
    </Button>
  )
}