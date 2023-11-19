import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Provider from './(Providers)/NextUIProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font--inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font--montserrat'
})

export const metadata: Metadata = {
  title: 'Turkish Sass Website',
  description: 'Ai Generated Prompt Website'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
