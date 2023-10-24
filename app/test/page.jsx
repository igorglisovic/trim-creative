'use client'

import React, { useEffect } from 'react'
import { useAnimationContext } from '../store/animation-ctx'

const page = () => {
  const { animationFinished, updateAnimationFinished } = useAnimationContext()

  useEffect(() => {
    updateAnimationFinished(false)
  }, [])
  return <div style={{ backgroundColor: '#9B81BB', height: '100vh' }}>test</div>
}

export default page
