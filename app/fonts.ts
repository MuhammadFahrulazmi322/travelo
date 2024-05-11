import { Roboto, Montserrat } from 'next/font/google'
 
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})