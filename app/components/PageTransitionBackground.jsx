'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimationContext } from '../store/animation-ctx'
import { useRouterContext } from '../store/router-ctx'
import TestPage from '../test/page'
import HomePage from '../page'

const PageTransitionBackground = () => {
  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

  const { pathHistory, currentPath } = useRouterContext()
  const [variants, setVariants] = useState()

  useEffect(() => {
    console.log(pathHistory[1])
  }, [pathHistory])

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
    const variantsObj = {
      hidden: {
        clipPath: `circle(0% at ${
          animationPosition?.x || window.innerWidth / 2
        }px ${animationPosition?.y || window.innerHeight / 2}px)`,
      },
      enter: {
        clipPath: `circle(${
          animationPosition?.x
            ? window.innerWidth + animationPosition?.x
            : window.innerWidth
        }px at ${animationPosition?.x || window.innerWidth / 2}px ${
          animationPosition?.y || window.innerHeight / 2
        }px)`,
      },
    }

    setVariants(variantsObj)
  }, [])

  return (
    <div className="absolute top-0 z-10 pt-[95px] w-full">
      <motion.div
        variants={variants}
        initial={'hidden'}
        animate={'enter'}
        exit={'hidden'}
        transition={{
          duration: 5,
          // type: 'spring',
          // stiffness: 100,
          // damping: 200,
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
        {currentPath === '/' && <HomePage />}
        {/* <HomePage /> */}
        {currentPath === '/test' && <TestPage />}
      </motion.div>
      <motion.div
        variants={variants2}
        initial={'hidden'}
        animate={'enter'}
        transition={{
          duration: 3,
          type: 'spring',
          stiffness: 100,
          damping: 50,
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
      </motion.div>
    </div>
  )
}

export default PageTransitionBackground
