import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Provider from './(Providers)/NextUIProvider'
import { ClerkProvider } from "@clerk/nextjs"
import {Toaster} from 'react-hot-toast';
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
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.variable} ${montserrat.variable}`}>
          <Provider>
            <Toaster reverseOrder={false} position="top-center"/>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
