import { publicSans, bluuNext } from '@/app/fonts'
import { Header } from '@/components/global/Header'
import { Container } from '@/components/ui/Container'
import { MobileNav } from '@/components/global/MobileNav'
import { SearchAndFilter } from '@/components/SearchAndFilter'
import { getAllTags } from '@/lib/recipes'
import styles from './Layout.module.css'

import { MobilePanelContextProvider } from './MobilePanelContext'
import { MobilePanel } from '@/components/global/MobilePanel'

import './globals.css'
import '@icon-park/react/styles/index.css'

export default function RootLayout(props) {
  const fontClassNames = [publicSans.variable, bluuNext.variable].join(' ')
  const allTags = getAllTags().join(',')
  return (
    <html lang="en" className={fontClassNames}>
      <head />
      <body>
        <MobilePanelContextProvider>
          <Header />
          <Container>
            <div className={styles['search-wrapper']}>
              <SearchAndFilter allTags={allTags} />
            </div>
          </Container>
          <div className={styles['content']}>
            <MobilePanel item={props.mobilePanel}>
              {props.mobilePanel}
            </MobilePanel>
            <div className={styles['content-wrapper']}>
              {/* Move search bar here ? */}
              <Container>
                {props.children}
              </Container>
            </div>
          </div>
        </MobilePanelContextProvider>
        <MobileNav />
      </body>
    </html>
  )
}
