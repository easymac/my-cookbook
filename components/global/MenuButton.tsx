import { TbMenu } from 'react-icons/tb'
import { Button } from '@/components/ui/Button'

export function MenuButton({ onOpen }) {
  return (
    <Button onClick={onOpen} className="menu-button">
      <TbMenu />
    </Button>
  )
}