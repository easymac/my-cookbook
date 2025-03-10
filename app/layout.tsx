import { publicSans, bagnard } from '@/app/fonts'
import { MobileNav } from '@/components/global/MobileNav'

import './globals.css'
import '@icon-park/react/styles/index.css'
import { ViewTransitions } from 'next-view-transitions'

export default function RootLayout(props: any) {
  const fontClassNames = [publicSans.variable, bagnard.variable].join(' ')
  return (
    <ViewTransitions>
      <html lang="en" className={fontClassNames}>
        <head />
        <body>
          {props.children}
          <MobileNav />
        </body>
      </html>
    </ViewTransitions>
  )
}
