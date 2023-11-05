import { useContainerContext } from '@/app/store/container-ctx'
import { useFontsContext } from '@/app/store/fonts-ctx'

const H1 = ({ children }) => {
  const { akiraFont } = useFontsContext()
  const { containerWidth } = useContainerContext()

  return (
    <h1
      className={`${akiraFont?.className} uppercase text-center whitespace-nowrap leading-none`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 10.0}px` : '235px',
      }}
    >
      {children}
    </h1>
  )
}

export default H1
