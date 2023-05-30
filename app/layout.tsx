import { publicSans, bluuNext } from '@/app/fonts'
import { Header } from '@/components/global/Header'
import { Container } from '@/components/ui/Container'
import { MobileNav } from '@/components/global/MobileNav'
import styles from './Layout.module.css'

import { MobilePanelContextProvider } from './MobilePanelContext'
import { MobilePanel } from '@/components/global/MobilePanel'

import './globals.css'
import '@icon-park/react/styles/index.css'

export default function RootLayout(props) {
  const fontClassNames = [publicSans.variable, bluuNext.variable].join(' ')
  return (
    <html lang="en" className={fontClassNames}>
      <head />
      <body>
        <MobilePanelContextProvider>
          <Header />
          <div className={styles['content']}>
            <div className={styles['content-wrapper']}>
              {/* Move search bar here ? */}
              <Container>
                {props.children}
              </Container>
            </div>
            <MobilePanel item={props.mobilePanel}>
              {props.mobilePanel}
            </MobilePanel>
          </div>
        </MobilePanelContextProvider>
        <MobileNav />
      </body>
    </html>
  )
}
