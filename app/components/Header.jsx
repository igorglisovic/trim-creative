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

  const {
    updateAnimationPosition,
    updateBackgroundColor,
    backgroundColor,
    animationFinished,
  } = useAnimationContext()

  useEffect(() => {
    updateAkiraFont(akira)
    updateGabaritoFont(gabarito)
  }, [gabarito, akira])

  const handleClick = (e, navItem) => {
    const targetPosition = e.target.getBoundingClientRect()
    console.log(targetPosition)

    updateAnimationPosition({ x: targetPosition.x, y: targetPosition.y })
    updateBackgroundColor(navItem.color)
  }

  return (
    <header
      className={`${gabaritoFont?.className}`}
      // style={{ backgroundColor: animationFinished && backgroundColor }}
    >
      <Container>
        <div className="relative min-h-[95px]">
          <div className="w-[8rem] absolute left-0 position-center z-[999999999999999999]">
            <Image
              priority={true}
              alt="Trim Creative logo"
              className="max-w-full"
              src={Logo}
            />
          </div>
          <nav className="flex items-center absolute nav z-[999999999999999999]">
            <ul className="flex gap-5">
              {navItemsSr?.map(navItem => (
                <li key={navItem.title} className="uppercase text-light-black">
                  <Link
                    onClick={e => handleClick(e, navItem)}
                    className="font-medium text-sm lg:text-base"
                    href={navItem.path}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="absolute right-0 position-center z-[999999999999999999]">
            Pozovi
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Nav
