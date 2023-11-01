'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useRouterContext } from './store/router-ctx'
import Footer from './components/Footer'
import HeroSection from './components/HomeSections/HeroSection'
import CardsSection from './components/HomeSections/CardsSection'
import PortfolioSection from './components/HomeSections/PortfolioSection'

const page = () => {
  const { updateCurrentPath } = useRouterContext()
  const pathname = usePathname()

  useEffect(() => {
    updateCurrentPath(pathname)
  }, [])

  return (
    <>
      <HeroSection />
      <CardsSection />
      <PortfolioSection />
      <Footer />
    </>
  )
}

export default page
