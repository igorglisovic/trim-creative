import { Gabarito } from '@next/font/google'
import './globals.css'
import Nav from './components/Header'
import { ContainerContextProvider } from './store/container-ctx'
import localFont from '@next/font/local'
import { FontsContextProvider } from './store/fonts-ctx'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimationContextProvider } from './store/animation-ctx'

const gabarito = Gabarito({ subsets: ['latin'] })
const akira = localFont({
  src: [
    {
      path: '../public/fonts/Akira-Expanded-Demo.otf',
      weight: '400',
    },
  ],
  variable: '--font-akira',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${akira.className} ${gabarito.className} overflow-x-hidden`}
      >
        <ContainerContextProvider>
          <FontsContextProvider>
            <AnimationContextProvider>
              <Nav gabarito={gabarito} akira={akira} />
              <main>{children}</main>
            </AnimationContextProvider>
          </FontsContextProvider>
        </ContainerContextProvider>
      </body>
    </html>
  )
}
