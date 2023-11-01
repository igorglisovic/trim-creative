'use client'

import Container from './UI/Container'
import Button from './UI/Button'
import Logo from '../../public/trim-logo.png'
import { navItemsSr } from '../data/nav'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useFontsContext } from '../store/fonts-ctx'
import { useAnimationContext } from '../store/animation-ctx'

const Nav = ({ gabarito, akira }) => {
  const { updateGabaritoFont, updateAkiraFont, gabaritoFont } =
    useFontsContext()

  const { updateAnimationPosition, updateBackgroundColor, animationFinished } =
    useAnimationContext()

  useEffect(() => {
    updateAkiraFont(akira)
    updateGabaritoFont(gabarito)
  }, [gabarito, akira])

  const handleClick = (e, navItem) => {
    // if (!animationFinished) {
    //   e.preventDefault()
    //   return
    // }

    updateAnimationPosition({ x: e.clientX, y: e.clientY })
    updateBackgroundColor(true)
  }

  return (
    <header className={`${gabaritoFont?.className}`}>
      <Container>
        <div className="relative min-h-[95px] whitespace-nowrap">
          <div className="md:w-[8rem] w-[6.3rem] absolute left-0 position-center z-[999999999999999999]">
            <Image
              priority={true}
              alt="Trim Creative logo"
              className="max-w-full"
              src={Logo}
            />
          </div>
          <nav className="hidden sm:flex items-center absolute nav z-[999999999999999999] ">
            <ul className="flex md:gap-5 gap-3">
              {navItemsSr?.map(navItem => (
                <li key={navItem.title} className="uppercase text-light-black">
                  <Link
                    onClick={e => handleClick(e, navItem)}
                    className={`font-medium text-sm lg:text-base ${
                      !animationFinished ? 'cursor-default' : 'cursor-pointer'
                    } `}
                    href={navItem.path}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="absolute right-0 position-center z-[999999999999999999] hidden sm:flex">
            Pozovi
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Nav
