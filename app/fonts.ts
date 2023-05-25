import { Public_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const bluuNext = localFont({
  src: '../public/fonts/BluuNext-Bold.otf',
  variable: '--bluu-next'
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--public-sans'
})
