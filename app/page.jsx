'use client'

import Image from 'next/image'
import Container from './components/UI/Container'
import { useContainerContext } from './store/container-ctx'
import Trim from '../public/aa.png'
import Trim2 from '../public/bmwm4.jpg'
import Button from './components/UI/Button'

const page = () => {
  const { containerWidth } = useContainerContext()

  return (
    <div>
      <Container>
        <div className="flex flex-col pt-10">
          <section>
            <div className="w-full relative">
              <div className="bg-circle-gradient w-[200px] h-[200px] rounded-full absolute right-[-130px] top-[-60px] z-20 rotate-[-176.47deg]"></div>
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
            <div className="flex justify-between mt-14 relative">
              {/* Circles */}
              <div className="bg-circle-gradient w-[130px] h-[130px] rounded-full absolute left-[47%] top-[40%] z-20 rotate-[99.13deg]"></div>
              <div className="bg-circle-gradient w-[70px] h-[70px] rounded-full absolute right-[5%] top-[-55px] z-20 rotate-[-2.4deg]"></div>
              <div className="bg-circle-gradient w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] rounded-full absolute left-[-150px] top-[-95px] z-50 rotate-[43.97deg]"></div>

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
          <section>test</section>
        </div>
      </Container>
    </div>
  )
}

export default page
