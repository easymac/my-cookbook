import { publicSans, bluuNext } from '@/app/fonts'
import { Header } from '@/components/global/Header'
import { Container } from '@/components/ui/Container'
import { MobileNav } from '@/components/global/MobileNav'

import './globals.css'
import '@icon-park/react/styles/index.css'

export default function RootLayout(props) {
  const fontClassNames = [publicSans.variable, bluuNext.variable].join(' ')
  return (
    <html lang="en" className={fontClassNames}>
      <head />
      <body>
        <Container>
          <Header />
          <div className="content">
            {props.children}
            {props.mobilePanel ? (
              <div className="mobile-panel">{props.mobilePanel}</div>
            ) : null}
          </div>
        </Container>
        <MobileNav />
      </body>
    </html>
  )
}
