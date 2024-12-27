'use client';

import React, { useState } from 'react';
import { blogs } from '../data/data';
import Image from 'next/image';
import Button from './shared/Button';
import { useRouter } from 'next/navigation';

const BlogFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(5);
  const router = useRouter();

  const filteredBlogs = blogs.filter((blog) => {
    if (activeFilter === 'All') return true;
    return blog.tags.includes(activeFilter);
  });

  // Sort blogs by date in descending order
  const sortedBlogs = [...blogs].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  const handleBlogClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <section className='bg-primary'>
      <div className='max-w-7xl mx-auto px-5 pt-20 font-sans'>
        <h2 className='text-2xl md:text-5xl font-bold mb-5 text-center text-darkGrey font-montserrat'>
          The fates of great athletes
        </h2>
        <p className='text-center text-darkPurple md:w-1/2 mx-auto font-sans'>
          Chemistry has always been the Clippers&apos; issue. For starters, all
          their players have had some kind of injury this year, preventing the
          team from getting into a good rhythm and used to playing...
        </p>

        {/* Filters */}
        <ul className='flex items-center uppercase text-darkPurple gap-8 mt-16 mb-7'>
          {['All', 'Trending', 'Featured', 'Essential Read'].map((filter) => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer underline hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon
                  ${activeFilter === filter ? 'decoration-lemon' : 'decoration-transparent'}`}
            >
              {filter}
            </li>
          ))}
        </ul>

        {/* Blog Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.title}
                className='flex flex-col gap-5 cursor-pointer hover:scale-105 transition-all duration-300'
                onClick={() => handleBlogClick(blog.slug)}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={550}
                  height={351}
                  className='w-auto h-[300px] object-cover rounded-[10px]'
                />
                <h3 className='text-2xl text-darkGrey font-bold font-montserrat'>
                  {blog.title}
                </h3>
                <p className='text-lightGrey line-clamp-2'>{blog.content}</p>
                <div className='flex flex-col gap-2'>
                  <ul className='flex items-center gap-2'>
                    {blog.tags.map((tag) => (
                      <li
                        key={tag}
                        className='text-xs bg-[#F5F7F9] border-2 border-lemon rounded-[40px] px-4 py-1 text-lightGrey'
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className='flex items-center gap-2 text-sm'>
                    <p className=' text-darkGrey'>By {blog.author}</p>
                    <span className='text-lightGrey text-base'>•</span>
                    <p className=' text-lightGrey'>{blog.date}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full py-7 text-center text-darkGrey text-lg'>
              No blogs found for the selected filter: {activeFilter}
            </div>
          )}
        </div>
      </div>

      {/* Recent Posts */}
      <div className='max-w-7xl mx-auto px-5 py-20'>
        <h3 className='text-xl md:text-3xl font-bold mb-5 text-darkGrey'>
          Recent Posts
        </h3>

        <div className='flex flex-col gap-8 lg:w-2/3 mb-12'>
          {sortedBlogs.slice(0, visiblePosts).map((blog) => (
            <div
              key={blog.title}
              className='flex flex-col md:flex-row md:gap-5 cursor-pointer hover:opacity-80 transition-opacity'
              onClick={() => handleBlogClick(blog.slug)}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={330}
                height={215}
                className='w-auto h-[215px] object-cover rounded-[10px]'
              />
              <div className='flex flex-col gap-2 mt-4'>
                <h3 className='text-2xl text-darkGrey font-bold'>
                  {blog.title}
                </h3>
                <div className='flex items-center gap-2 text-sm'>
                  <p className=' text-darkGrey'>By {blog.author}</p>
                  <span className='text-lightGrey text-base'>•</span>
                  <p className=' text-lightGrey'>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          text='View More Posts'
          className='bg-lemon text-darkPurple uppercase font-bold text-sm mx-auto md:ml-20 md:mr-0'
          disabled={visiblePosts >= sortedBlogs.length}
          onClick={handleLoadMore}
        />
      </div>
    </section>
  );
};

export default BlogFilter;
