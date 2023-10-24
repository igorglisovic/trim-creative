'use client'

import { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export const useAnimationContext = () => useContext(AnimationContext)

export const AnimationContextProvider = ({ children }) => {
  const [animationPosition, setAnimationPosition] = useState(null)
  const [animationFinished, setAnimationFinished] = useState(null)
  const [backgroundColor, setBackgroundColor] = useState(false)

  const updateAnimationPosition = value => {
    setAnimationPosition(value)
  }

  const updateAnimationFinished = value => {
    setAnimationFinished(value)
  }

  const updateBackgroundColor = value => {
    setBackgroundColor(value)
  }

  return (
    <AnimationContext.Provider
      value={{
        animationPosition,
        animationFinished,
        backgroundColor,
        updateAnimationPosition,
        updateAnimationFinished,
        updateBackgroundColor,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
