import React from 'react'
import Button from './Button'
import Image from 'next/image'

const MoneyStress = () => {
  return (
    <section className="bg-primary text-darkPurple px-5 py-12 md:px-10">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center flex-col md:flex-row justify-between gap-10 container mx-auto relative">
      <div className="basis-1/2 relative w-[80%] md:w-full">
        <div className='bg-white rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[475px] lg:h-[475px] flex items-center justify-center mx-auto'>
          <Image
            src={"/moneystress.gif"}
            alt=""
            width={475}
            height={475}
            className="object-contain w-[90%] h-[90%]"
          />
        </div>
      </div>
        <div className="basis-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">
          Money Stress Is Real —<br/>You Deserve Better
          </h1>
          <p className='font-abeezee text-lg md:text-xl text-subdued'>
          Over 35% of Canadians struggle to cover everyday expenses, and 26% can’t handle an unexpected $500 cost. Managing finances shouldn’t feel impossible.<br/><br/>
          Peniwyse puts you in control—track spending, manage payments, and plan ahead with ease. Make every penny count, reduce stress, and focus on what matters most.
          </p>

          <div className="flex items-center justify-center md:justify-start flex-wrap gap-[18px] mt-10">
            <Button
              text="Get Started"
              arrowType="light"
              className="bg-darkPurple text-white"
            />
            <Button
              text="Join Community"
              arrowType="dark"
              className="bg-transparent border text-darkPurple border-darkPurple"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MoneyStress
