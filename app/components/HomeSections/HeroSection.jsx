import { useEffect, useState } from 'react'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import { useContainerContext } from '@/app/store/container-ctx'
import { useFontsContext } from '@/app/store/fonts-ctx'
import { useAnimationContext } from '@/app/store/animation-ctx'
import Container from '../UI/Container'
import H1 from '../UI/H1'
import Logo from '../../../public/trim-logo.png'
import Image from 'next/image'

const HeroSection = () => {
  

  const { gabaritoFont } = useFontsContext()

  const variants = {
    hidden: {
      y: '1000px',
    },
    show: {
      y: '-1000px',
    },
  }

  return (
    <>
      <Container>
        <H1></H1>
        <div className="md:w-[8rem] w-[6.3rem] absolute top-6 left-[50%] translate-x-[-50%] z-[999999999999999999]">
          <Image src={Logo} />
        </div>
        <div className="w-full relative">
          {/* Circles */}
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[200px] h-[200px] rounded-full absolute right-[-130px] top-[-60px] z-20 rotate-[-176.47deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 5,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
        </div>
        <div
          className={`${gabaritoFont?.className} flex flex-col md:flex-row md:text-left text-center lg:gap-10 gap-8 mt-14 relative`}
        >
          {/* Circles */}
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[130px] h-[130px] rounded-full absolute left-[47%] top-[40%] z-20 rotate-[99.13deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 6,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[70px] h-[70px] rounded-full absolute right-[5%] top-[-55px] z-20 rotate-[-2.4deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 4,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] rounded-full absolute left-[-150px] top-[-95px] z-50 rotate-[43.97deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 8,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full absolute left-[230px] top-[500px] -z-50 rotate-[43.97deg]"
            variants={{
              hidden: {
                y: '1000px',
              },
              show: {
                y: '-1000px',
              },
            }}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 8,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[60px] h-[60px] rounded-full absolute left-[-25px] top-[365px] z-10 rotate-[43.97deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 4,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[160px] h-[160px] rounded-full absolute right-[0] bottom-[-470px] z-50 rotate-[99.13deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 6,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            style={{ y: '1000px' }}
            className="bg-circle-gradient w-[55px] h-[55px] rounded-full absolute left-[200px] bottom-[-420px] z-[-10] rotate-[99.13deg]"
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            transition={{
              duration: 7,
              type: 'ease-out',
              repeat: Infinity,
            }}
          ></motion.div>
        </div>
      </Container>
    </>
  )
}

export default HeroSection
