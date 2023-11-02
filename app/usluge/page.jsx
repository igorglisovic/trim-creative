'use client'

import { useState } from 'react'
import Container from '../components/UI/Container'
import H1 from '../components/UI/H1'
import UslugeCard from '../components/UslugeSections/UslugeCard'
import { uslugeCards } from '../data/cards'

const page = () => {
  const [cards, setCards] = useState(uslugeCards)

  return (
    <Container>
      <div className="pt-6 pb-20">
        <H1>Nase usluge</H1>
        <div className="flex flex-col gap-7 mt-12">
          {cards?.map((card, index) => (
            <UslugeCard
              key={card.title}
              cards={cards}
              card={card}
              setCards={setCards}
              index={index}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default page
