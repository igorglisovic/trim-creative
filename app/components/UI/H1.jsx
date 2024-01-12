import { useContainerContext } from '@/app/store/container-ctx'
import { useFontsContext } from '@/app/store/fonts-ctx'
import { useEffect, useState } from 'react'

const H1 = () => {
  const { akiraFont } = useFontsContext()
  const { containerWidth } = useContainerContext()

  const [mediaMatches, setMediaMatches] = useState(false)
  const [media, setMedia] = useState(false)

  useEffect(() => {
    setMedia(window.matchMedia('(max-width: 520px)'))
  }, [])

  const getMediaMatches = () => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
  }

  useEffect(() => {
    getMediaMatches()
    window.addEventListener('resize', getMediaMatches)
  }, [media])

  return mediaMatches ? (
    <h1
      className={`${akiraFont?.className} uppercase text-center whitespace-nowrap leading-none absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 6}px` : '100px',
      }}
    >
      Coming
      <br /> soon
    </h1>
  ) : (
    <h1
      className={`${akiraFont?.className} uppercase text-center whitespace-nowrap leading-none absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 12.6}px` : '100px',
      }}
    >
      Coming soon
    </h1>
  )
}

export default H1
