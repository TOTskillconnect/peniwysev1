import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import BlogFilter from '../components/BlogFilter'
import Footer from '../components/Footer'

const MainBlog = () => {
  return (
    <section className='bg-primary'>
      <header className='max-w-7xl mx-auto px-5 pt-8 pb-0 lg:pb-6'>
        <Navbar darkMode />
      </header>
      <div className="bg-darkPurple h-[400px] relative">
        <Image
          src={"/blog-bg.png"}
          alt=""
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* center horizontally on bottom */}
        <Image src={"/blog-money.svg"} alt="" width={150} height={168} className='absolute -bottom-12 left-1/2 transform -translate-x-1/2' />
        </div>

        <BlogFilter />
        <Footer darkMode />
    </section>
  )
}

export default MainBlog
