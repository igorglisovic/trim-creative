'use client'

import { useContainerContext } from '@/app/store/container-ctx'
import { useEffect, useRef } from 'react'

const Container = ({ children }) => {
  const ref = useRef()

  const { updateContainerWidth, containerWidth } = useContainerContext()

  useEffect(() => {
    if (!containerWidth) {
      updateContainerWidth(ref.current.getBoundingClientRect().width - 96)
    }

    const calcWidth = () => {
      updateContainerWidth(ref.current.getBoundingClientRect().width - 96)
    }

    window.addEventListener('resize', calcWidth)

    return () => {
      window.removeEventListener('resize', calcWidth)
    }
  }, [])

  return (
    <div ref={ref} className="max-w-[1700px] m-auto px-12 ">
      {children}
    </div>
  )
}

export default Container
