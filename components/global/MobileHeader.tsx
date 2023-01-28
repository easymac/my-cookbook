import { SiteTitle } from '@/components/global/SiteTitle'
import { MenuButton } from '@/components/global/MenuButton'

export function MobileHeader() {
  return (
    <header>
      <SiteTitle />
      <MenuButton />
    </header>
  )
}