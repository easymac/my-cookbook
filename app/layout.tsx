import { publicSans } from '@/app/fonts'
import { Header } from '@/components/global/Header'
import { Container } from '@/components/ui/Container'
import { MobileNav } from '@/components/global/MobileNav'

import './globals.css'
import '@icon-park/react/styles/index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <head />
      <body>
        <Container>
          <Header />
          <div className="content">
            {children}
          </div>
        </Container>
        <MobileNav />
      </body>
    </html>
  )
}
