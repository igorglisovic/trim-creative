'use client'

import Image from 'next/image'
import Container from './components/UI/Container'
import { useContainerContext } from './store/container-ctx'
import Trim from '../public/aa.png'
import Trim2 from '../public/bmwm4.jpg'
import Button from './components/UI/Button'
import { useFontsContext } from './store/fonts-ctx'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { useAnimationContext } from './store/animation-ctx'

const page = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0)

  const { containerWidth } = useContainerContext()
  const { gabaritoFont } = useFontsContext()
  const { animationFinished, updateAnimationFinished } = useAnimationContext()

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion - 20])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished) {
      setHookedYPosition(80)
    }
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    updateAnimationFinished(false)
  }, [])

  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10">
          <section>
            <div className="w-full relative">
              <motion.div
                style={{ y }}
                className="bg-circle-gradient w-[200px] h-[200px] rounded-full absolute right-[-130px] top-[-60px] z-20 rotate-[-176.47deg]"
              ></motion.div>
              <h1
                className={`uppercase text-center whitespace-nowrap leading-none font-thin `}
                style={{
                  fontSize: containerWidth
                    ? `${containerWidth / 11.6}px`
                    : '235px',
                }}
              >
                Odsecite vasu <br /> konkurenciju
              </h1>
            </div>
            <div
              className={`${gabaritoFont?.className} flex justify-between mt-14 relative`}
            >
              {/* Circles */}
              <motion.div
                style={{ y: y1 }}
                className="bg-circle-gradient w-[130px] h-[130px] rounded-full absolute left-[47%] top-[40%] z-20 rotate-[99.13deg]"
              ></motion.div>
              <motion.div
                style={{ y }}
                className="bg-circle-gradient w-[70px] h-[70px] rounded-full absolute right-[5%] top-[-55px] z-20 rotate-[-2.4deg]"
              ></motion.div>
              <motion.div
                style={{ y: y1 }}
                className="bg-circle-gradient w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] rounded-full absolute left-[-150px] top-[-95px] z-50 rotate-[43.97deg]"
              ></motion.div>

              <div className="flex relative pb-[38.55%] overflow-hidden w-[48.5%] shadow-md rounded-[38px]">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover z-30"
                  alt=""
                  src={Trim}
                />
              </div>
              <div className="w-[48.5%] flex flex-col gap-5">
                <div className="flex relative pb-[56.25%] overflow-hidden w-full shadow-md rounded-[38px] z-10">
                  <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt=""
                    src={Trim2}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum fuga modi, inventore cupiditate natus eius accusamus
                    voluptatum iure ipsa quod tempora eaque molestias impedit
                    totam magni veniam doloribus sunt praesentium.
                  </p>
                  <Button className="self-end">Saznaj više</Button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex relative pb-[20.55%] overflow-hidden w-full shadow-md rounded-[38px]">
              <Image
                src={Trim}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
              />
            </div>
          </section>
        </div>
        <section>
          <svg
            width="49"
            height="24"
            viewBox="0 0 49 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.0607 13.0607C48.6464 12.4749 48.6464 11.5251 48.0607 10.9393L38.5147 1.3934C37.9289 0.807611 36.9792 0.807611 36.3934 1.3934C35.8076 1.97919 35.8076 2.92893 36.3934 3.51472L44.8787 12L36.3934 20.4853C35.8076 21.0711 35.8076 22.0208 36.3934 22.6066C36.9792 23.1924 37.9289 23.1924 38.5147 22.6066L48.0607 13.0607ZM0 13.5H47V10.5H0V13.5Z"
              fill="white"
              fillOpacity="0.48"
            />
          </svg>

          <h2>Maximizing Your Online Impact</h2>
        </section>
      </Container>
    </div>
  )
}

export default page
