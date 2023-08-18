import './globals.css'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
})


export const metadata = {
  title: 'Maverick Languages Studios',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ montserrat.className }>{ children }</body>
    </html>
  )
}
