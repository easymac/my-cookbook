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

export const youngSerif = localFont({
  src: [
    { path: '../public/fonts/Young-Serif.ttf' },
    { path: '../public/fonts/Young-Serif-Italic.ttf', style: 'italic' }
  ],
  variable: '--young-serif'
})
