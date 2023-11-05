'use client'

import Container from './UI/Container'
import Button from './UI/Button'
import Logo from '../../public/trim-logo.png'
import { navItemsSr } from '../data/nav'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFontsContext } from '../store/fonts-ctx'
import { useAnimationContext } from '../store/animation-ctx'
import { motion } from 'framer-motion'

const Nav = ({ gabarito, akira }) => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
          {/* Desktop Menu */}
          <nav className="hidden invisible sm:visible sm:flex items-center absolute nav z-[999999999999999999] ">
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
          {/* Mobile Menu */}
          <motion.button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className={'button-two absolute right-0 w-14 h-14'}
            aria-expanded="false"
            aria-label="hamburger"
          >
            <svg
              stroke={'red'}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              className="w-full"
            >
              <line
                className={`line top`}
                x1="10"
                x2="90"
                y1="40"
                y2="40"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="80"
                strokeDashoffset="0"
              ></line>
              <line
                className={`line bottom`}
                x1="90"
                x2="10"
                y1="60"
                y2="60"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="45"
                strokeDashoffset="0"
              ></line>
              <line
                className={`line top`}
                x1="10"
                x2="90"
                y1="80"
                y2="80"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="80"
                strokeDashoffset="0"
              ></line>
            </svg>
          </motion.button>
          <Button className="hidden invisible sm:visible sm:flex absolute right-0 position-center z-[999999999999999999]">
            Pozovi
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Nav
