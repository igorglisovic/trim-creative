import { Gabarito } from 'next/font/google'
import './globals.css'
import { ContainerContextProvider } from './store/container-ctx'
import localFont from 'next/font/local'
import { FontsContextProvider } from './store/fonts-ctx'
import { AnimationContextProvider } from './store/animation-ctx'
import { RouterContextProvider } from './store/router-ctx'

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
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
  title: 'TrimCreative',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${akira.className}`}>
        <ContainerContextProvider>
          <FontsContextProvider>
            <AnimationContextProvider>
              <RouterContextProvider>
                <main>{children}</main>
              </RouterContextProvider>
            </AnimationContextProvider>
          </FontsContextProvider>
        </ContainerContextProvider>
      </body>
    </html>
  )
}
