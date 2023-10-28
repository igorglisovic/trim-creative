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
import { useAnimationContext } from './store/animation-ctx'
import { usePathname } from 'next/navigation'
import { useRouterContext } from './store/router-ctx'
import { cards as cardsData } from './data/cards'
import Link from 'next/link'

const page = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0)
  const [cards, setCards] = useState(cardsData)
  const [clickedCard, setClickedCard] = useState(cardsData[0])

  const { containerWidth } = useContainerContext()
  const { gabaritoFont } = useFontsContext()
  const { animationFinished, updateAnimationFinished, backgroundColor } =
    useAnimationContext()

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion - 20])

  const { updateCurrentPath } = useRouterContext()
  const pathname = usePathname()

  const whileHoverVariant = {
    show: {
      width: '650px',
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  }

  const cardVariants = {
    closed: {
      opacity: 0,
      display: 'none',
      visibility: 'hidden',
      height: 0,
      y: 20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    open: {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      height: 'fit-content',
      display: 'flex',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  }

  useEffect(() => {
    updateCurrentPath(pathname)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished) {
      setHookedYPosition(80)
    }
  })

  useEffect(() => {
    console.log(cards)
  }, [cards])

  const handleClick = index => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index && !card.active) return { ...card, active: true }
        if (i === index && card.active) return { ...card, active: false }
        else return card
      })
    )

    setClickedCard(
      ...cards.filter((card, i) => {
        if (i === index) return card
      })
    )
  }

  return (
    <div>
      <Container>
        <div className="flex flex-col gap-6 pt-10 pb-20">
          <section>
            <div className="w-full relative">
              {/* Circles */}
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
              <motion.div
                style={{ y: y1 }}
                className="bg-circle-gradient w-[60px] h-[60px] rounded-full absolute left-[-25px] top-[365px] z-10 rotate-[43.97deg]"
              ></motion.div>
              <motion.div
                style={{ y: y1 }}
                className="bg-circle-gradient w-[160px] h-[160px] rounded-full absolute right-[0] bottom-[-470px] z-50 rotate-[99.13deg]"
              ></motion.div>
              <motion.div
                style={{ y: y1 }}
                className="bg-circle-gradient w-[55px] h-[55px] rounded-full absolute left-[200px] bottom-[-420px] z-[-10] rotate-[99.13deg]"
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
      </Container>
      <section className="bg-dark-gray py-16">
        <Container>
          <div className="relative">
            {/* Circles */}
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[160px] h-[160px] rounded-full absolute left-[-20px] bottom-[-220px] z-50 rotate-[99.13deg]"
            ></motion.div>
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[50px] h-[50px] rounded-full absolute left-[210px] bottom-[-180px] z-[-1] rotate-[99.13deg]"
            ></motion.div>

            <h2 className="text-white text-4xl">
              Maximizing Your Online Impact
            </h2>
            <div className="flex gap-6 mt-10">
              <div className="w-[53%] rounded-[37px] overflow-hidden relative">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={Trim}
                  alt=""
                />
              </div>
              <div className={`${gabaritoFont?.className} w-[47%]`}>
                <ul className="flex flex-col gap-3">
                  {cards?.map((card, i) => (
                    <li
                      className="py-4 px-7 rounded-[37px] bg-card-black text-white"
                      key={card.title}
                    >
                      <button
                        onClick={() => handleClick(i)}
                        className="flex justify-between"
                      >
                        <h3
                          className={`text-2xl uppercase ${
                            card.active && 'font-bold'
                          }`}
                        >
                          {card.title}
                        </h3>
                      </button>
                      <motion.div
                        variants={cardVariants}
                        initial={cards[i].active ? 'open' : 'closed'}
                        animate={cards[i].active ? 'open' : 'closed'}
                        className="flex-col mt-4"
                      >
                        <p className="font-normal text-sm">
                          {card.description}
                        </p>
                        <Button className="uppercase mt-2 self-end float-right">
                          <Link href={card.link}>Saznaj vise</Link>
                        </Button>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div>
            <h2 className="text-center text-4xl mb-10">Portfolio</h2>
            <div className="flex gap-5 min-h-[600px]">
              <motion.div
                variants={whileHoverVariant}
                whileHover={'show'}
                className="w-[300px] rounded-[37px] overflow-hidden relative"
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={Trim}
                  alt=""
                />
              </motion.div>
              <motion.div
                variants={whileHoverVariant}
                whileHover={'show'}
                className="w-[300px] rounded-[37px] overflow-hidden relative"
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={Trim}
                  alt=""
                />
              </motion.div>
              <motion.div
                variants={whileHoverVariant}
                whileHover={'show'}
                className="w-[300px] rounded-[37px] overflow-hidden relative"
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={Trim}
                  alt=""
                />
              </motion.div>
              <motion.div
                variants={whileHoverVariant}
                whileHover={'show'}
                className="w-[300px] rounded-[37px] overflow-hidden relative"
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={Trim}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default page
