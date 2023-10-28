'use client'

import { easeIn, easeInOut, motion } from 'framer-motion'
import { useAnimationContext } from './store/animation-ctx'
import { useEffect, useState } from 'react'
import HomePage from './page.jsx'
import TestPage from './test/page.jsx'
import { useRouterContext } from './store/router-ctx'
import Lenis from '@studio-freight/lenis'

const Template = ({ children }) => {
  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

  const [variants, setVariants] = useState()

  const { pathHistory } = useRouterContext()

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const variants2 = {
    hidden: {
      // display: 'hidden',
      // opacity: 1,
      left: 0,
      top: 0,
    },
    enter: {
      // display: 'initial',
      // opacity: 0,
      left: '-200px',
    },
    toDown: {
      // display: 'initial',
      // opacity: 0,
      top: '200px',
    },
  }

  useEffect(() => {
    console.log(pathHistory)
  }, [pathHistory])

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    let variantsObj

    if (!animationPosition?.x || !animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
        },
        enter: {
          clipPath: `circle(${
            screenWidth > screenHeight ? screenWidth : screenHeight
          }px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
        },
      }
    }

    if (animationPosition?.x && animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${
            animationPosition?.x || screenWidth / 2
          }px ${animationPosition?.y || screenHeight / 2}px)`,
        },
        enter: {
          clipPath: `circle(${
            screenWidth > screenHeight
              ? screenWidth + animationPosition.x
              : screenWidth + animationPosition.x
          }px at ${animationPosition?.x}px ${animationPosition?.y}px)`,
        },
      }
    }
    console.log(screenHeight, animationPosition?.y)
    console.log(screenWidth, animationPosition?.x)

    setVariants(variantsObj)
  }, [])

  return (
    <>
      {variants && (
        <motion.div
          // variants={variants}
          initial={'hidden'}
          animate={'enter'}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 120,
            damping: 180,
          }}
          onAnimationStart={() => {
            updateAnimationStarted(true)
            updateAnimationFinished(false)
          }}
          onAnimationComplete={() => {
            updateAnimationFinished(true)
            updateAnimationStarted(false)
            updateBackgroundColor(false)
          }}
          className={`${animationFinished ? '' : 'test'}`}
        >
          {children}
        </motion.div>
      )}
      {/* <motion.div
        variants={variants2}
        initial={'hidden'}
        animate={'enter'}
        transition={{
          duration: 2,
          type: 'easeIn',
          // stiffness: 100,
          // damping: 50,
        }}
        className="absolute top-0 z-10 pt-[95px] w-full"
      >
        {animationPosition &&
          !animationFinished &&
          pathHistory &&
          pathHistory[0] === '/' && <HomePage fadeIn={false} />}
        {animationPosition &&
          !animationFinished &&
          pathHistory &&
          pathHistory[0] === '/test' && <TestPage fadeIn={false} />}
      </motion.div> */}
    </>
  )
}

export default Template
