'use client'

import { motion } from 'framer-motion'
import { useAnimationContext } from './store/animation-ctx'
import { useEffect } from 'react'

const Template = ({ children }) => {
  const {
    animationPosition,
    updateAnimationFinished,
    backgroundColor,
    animationFinished,
  } = useAnimationContext()

  const { innerWidth, innerHeight } = window

  const variants = {
    hidden: {
      clipPath: `circle(0.184% at ${animationPosition?.x || innerWidth / 2}px ${
        animationPosition?.y || innerHeight / 2
      }px)`,
    },
    enter: {
      clipPath: `circle(300.184% at ${
        animationPosition?.x || innerWidth / 2
      }px ${animationPosition?.y || innerHeight / 2}px)`,
    },
  }

  useEffect(() => {
    console.log('animationFinished ', animationPosition)
  }, [animationFinished, animationPosition])

  return (
    <div>
      <motion.div
        variants={variants}
        initial={'hidden'}
        animate={'enter'}
        transition={{ type: 'ease-in', duration: 4.5 }}
        onAnimationComplete={() => {
          updateAnimationFinished(true)
        }}
        className={`${animationFinished ? '' : 'test'}`}
        style={{ backgroundColor }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Template
