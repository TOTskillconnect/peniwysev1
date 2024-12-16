'use client'

import React, { useState, useEffect } from 'react'
import { howItWorks } from '../data/data'

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true)
      
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % howItWorks.length)
        setIsSliding(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='px-5 mx-auto max-w-7xl'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:w-[80%] mx-auto md:text-4xl lg:text-5xl font-extrabold mb-3 text-subdued'>Manage Your Money Seamlessly in One Place!</h2>
      </div>

      <div className='md:w-[80%] mx-auto relative h-[381px] rounded-t-[56px] before:absolute before:inset-0 before:p-[20px] before:rounded-t-[56px] before:bg-gradient-to-b before:from-violet-50 before:to-white'>
        <div className='absolute flex flex-col inset-[20px] bottom-0 bg-white rounded-t-[36px] pt-16'>
          <div className='flex justify-center gap-3 items-center mb-8'>
          {
            howItWorks.map((item, index) => (
              <div 
                key={`howitworks-${index}`} 
                className={`border rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                  ${index === activeIndex ? 'text-white bg-pink2 text-xl w-12 h-12 border-transparent' : 'text-darkPurple border-darkPurple w-8 h-8'}`}
                onClick={() => {
                  setIsSliding(true)
                  setTimeout(() => {
                    setActiveIndex(index)
                    setIsSliding(false)
                  }, 500)
                }}
              >
                {item.id}
              </div>
            ))
          }
          </div>
          <div className='flex flex-col h-full items-center gap-5 mb-10'>
            <div className='w-[95%] md:w-2/3 h-full rounded-[26px] bg-[#FFFAFD] flex items-center justify-center flex-col py-5 border border-[#FFEAF6] overflow-hidden'>
              <div className={`transition-transform duration-500 ease-in-out text-center ${isSliding ? 'translate-y-full' : 'translate-y-0'}`}>
                <h4 className='font-extrabold text-2xl text-subdued mb-2'>{howItWorks[activeIndex].title}</h4>
                <p className=' text-subdued px-4 w-[80%] mx-auto font-abeezee'>{howItWorks[activeIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
