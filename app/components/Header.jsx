'use client'

import Container from './UI/Container'
import Button from './UI/Button'
import Logo from '../../public/trim-logo.png'
import { navItemsSr } from '../data/nav'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useFontsContext } from '../store/fonts-ctx'

const Nav = ({ gabarito, akira }) => {
  const { updateGabaritoFont, updateAkiraFont, gabaritoFont } =
    useFontsContext()

  useEffect(() => {
    updateAkiraFont(akira)
    updateGabaritoFont(gabarito)
  }, [gabarito, akira])

  return (
    <header className={`bg-white py-5 ${gabaritoFont?.className}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[8rem]">
            <Image
              priority={true}
              alt="Trim Creative logo"
              className="max-w-full"
              src={Logo}
            />
          </div>
          <nav className="flex items-center">
            <ul className="flex gap-5">
              {navItemsSr?.map(navItem => (
                <li key={navItem.title} className="uppercase text-light-black">
                  <Link className="font-medium text-sm lg:text-base" href="/">
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button>Pozovi</Button>
        </div>
      </Container>
    </header>
  )
}

export default Nav
