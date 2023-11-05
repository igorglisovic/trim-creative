import Container from '../UI/Container'
import { useState } from 'react'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import Trim from '../../../public/aa.png'
import Button from '../UI/Button'
import Image from 'next/image'
import { cards as cardsData } from '../../data/cards'
import { useFontsContext } from '@/app/store/fonts-ctx'
import { KeyboardArrowDown } from '@mui/icons-material'
import Link from 'next/link'
import { useAnimationContext } from '@/app/store/animation-ctx'

const CardsSection = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0)
  const [cards, setCards] = useState(cardsData)
  const [clickedCard, setClickedCard] = useState(cardsData[0])

  const { gabaritoFont, akiraFont } = useFontsContext()
  const { animationFinished } = useAnimationContext()

  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion - 20])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished) {
      setHookedYPosition(80)
    }
  })

  const cardVariants = {
    closed: {
      opacity: 0,
      visibility: 'hidden',
      height: 0,
      y: 20,
      margin: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
      transitionEnd: {
        display: 'none',
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
        damping: 30,
      },
    },
  }

  const buttonVariants = {
    closed: {
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      rotate: '180deg',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

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
    <section className="bg-dark-gray py-20">
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

          <h2
            className={`${akiraFont?.className} text-white sm:text-4xl text-3xl text-center sm:text-left`}
          >
            Maximizing Your Online Impact
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-6 mt-12">
            <div className="flex-1 grow-[1.2] min-h-[300px] rounded-[37px] overflow-hidden relative">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </div>
            <div className={`${gabaritoFont?.className} flex-1`}>
              <ul className="flex flex-col gap-3">
                {cards?.map((card, i) => (
                  <li
                    className="px-7 rounded-[37px] bg-card-black text-white"
                    key={card.title}
                  >
                    <button
                      onClick={() => handleClick(i)}
                      className="flex justify-between items-center w-full py-4"
                    >
                      <h3
                        className={`text-2xl uppercase ${
                          card.active && 'font-bold'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <motion.div
                        variants={buttonVariants}
                        initial={cards[i].active ? 'open' : 'closed'}
                        animate={cards[i].active ? 'open' : 'closed'}
                      >
                        <KeyboardArrowDown
                          sx={{
                            stroke: card.active && 'white',
                            strokeWidth: card.active && '1px',
                          }}
                        />
                      </motion.div>
                    </button>
                    <motion.div
                      variants={cardVariants}
                      initial={cards[i].active ? 'open' : 'closed'}
                      animate={cards[i].active ? 'open' : 'closed'}
                      className="flex-col"
                    >
                      <p className="font-normal text-sm">{card.description}</p>
                      <Button className="uppercase mt-2 mb-4 self-end float-right">
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
  )
}

export default CardsSection
