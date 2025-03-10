import { Public_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const bagnard = localFont({
  src: '../public/fonts/Bagnard.otf',
  variable: '--bagnard'
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--public-sans'
})
