import React from 'react'
import { blogs } from '../data/data'
import Image from 'next/image'

const BlogFilter = () => {
  return (
    <section className='bg-primary'>
      <div className='max-w-7xl mx-auto px-5 py-20'>
        <h2 className='text-2xl md:text-5xl font-bold mb-5 text-center'>The fates of great athletes</h2>
        <p className='text-center text-darkPurple md:w-1/2 mx-auto'>Chemistry has always been the Clippers’ issue. For starters, all their players have had some kind of injury this year, preventing the team from getting into a good rhythm and used to playing...</p>

        {/* Filters */}
          <ul className='flex items-center uppercase text-darkPurple gap-8 mt-16 mb-7'>
            <li className='cursor-pointer underline decoration-transparent hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon'>All</li>
            <li className='cursor-pointer underline decoration-transparent hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon'>Trending</li>
            <li className='cursor-pointer underline decoration-transparent hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon'>Featured</li>
            <li className='cursor-pointer underline decoration-transparent hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon'>Essential Read</li>
          </ul>

          {/* Blog Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {blogs.map((blog) => (
              <div key={blog.title} className='flex flex-col gap-5'>
                <Image src={blog.image} alt={blog.title} width={550} height={351} className='w-auto h-[300px] object-cover rounded-[10px]' />
                <h3 className='text-2xl text-darkGrey font-bold'>{blog.title}</h3>
                <p className='text-lightGrey line-clamp-2 h-full'>{blog.content}</p>
                <div className='flex flex-col gap-2'>
                  <ul className='flex items-center gap-2'>
                  {blog.tags.map((tag) => (
                    <li key={tag} className='text-xs bg-[#F5F7F9] border-2 border-lemon rounded-[40px] px-4 py-1 text-lightGrey'>{tag}</li>
                  ))}
                </ul>
              <div className='flex items-center gap-2 text-sm'>
                <p className=' text-darkGrey'>By {blog.author}</p>
                <span className='text-lightGrey text-base'>•</span>
                <p className=' text-lightGrey'>{blog.date}</p>
              </div>
              </div>
              </div>
            ))}
          </div>
      </div>
      
    </section>
  )
}

export default BlogFilter
