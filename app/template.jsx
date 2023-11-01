'use client'

import { motion } from 'framer-motion'
import { useAnimationContext } from './store/animation-ctx'
import { useEffect, useState } from 'react'
import { useRouterContext } from './store/router-ctx'
import Lenis from '@studio-freight/lenis'

const Template = ({ children }) => {
  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    animationStarted,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

  const [variants, setVariants] = useState()

  const { pathHistory } = useRouterContext()

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis()
    // lenis.isStopped = true

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    if (animationFinished) {
      // lenis.isStopped = false
    } else {
      // lenis.isStopped = true
    }
    console.log(animationFinished)
  }, [animationFinished])

  const variants2 = {
    hidden: {
      left: 0,
      top: 0,
    },
    enter: {
      left: '-200px',
    },
    toDown: {
      top: '200px',
    },
  }

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
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }

    if (animationPosition?.x && animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${animationPosition.x}px ${animationPosition.y}px)`,
          transitionEnd: {
            // clipPath: 'none',
          },
        },
        enter: {
          clipPath: `circle(${
            screenWidth > screenHeight
              ? screenWidth + animationPosition.x
              : screenWidth + animationPosition.x
          }px at ${animationPosition?.x}px ${animationPosition?.y}px)`,
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }
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
            // duration: 12,
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
