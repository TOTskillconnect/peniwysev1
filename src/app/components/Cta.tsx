import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <div className='bg-[#F3F2FF] rounded-[20px] relative py-14 mt-14'>
      <Image src={"/coins.svg"} alt="" width={201} height={65} className='absolute bottom-0 right-5' />
      <Image src={"/star.gif"} alt="" width={153} height={327} className='absolute top-3 z-0 left-10' />
      <h2 className='relative md:w-2/3 text-center mx-auto text-3xl md:text-4xl lg:text-5xl font-extrabold text-subdued mb-5'>Get the latest news and updates about our app </h2>
      <p className='relative text-center text-subdued w-[80%] md:w-1/2 mx-auto mb-10'>Save Smarter, Spend Better, and Grow Your Future</p>

      <div className='flex relative gap-4 border border-[#ECECEC] rounded-full mx-auto w-[80%] md:w-1/2 h-[63px] p-2 mb-10 md:mb-0'>
        <input type="text" placeholder='Enter your email' className='w-[80%] p-4 rounded-full border border-transparent outline-none bg-transparent' />
        <button className='bg-lemon text-darkPurple px-8 whitespace-nowrap rounded-full'>Join Waitlist</button>
      </div>
    </div>
  )
}

export default Cta
