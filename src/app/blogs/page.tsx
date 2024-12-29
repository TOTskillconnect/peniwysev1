import React from 'react';
import Image from 'next/image';
import BlogFilter from '@/components/BlogFilter';
import { sanityFetch } from '@/sanity/lib/live';
import { groq } from 'next-sanity';

const fetchBlogCategories = groq`*[_type == "category"][0...3]`;
const fetchInitialPosts = groq`*[_type == "post"] | order(_createdAt desc) [0...2]{
  ...,
  "author": author->name,
  categories[]->{
    title,
    _id
  }
}`;

export default async function MainBlog() {
  const { data: categories } = await sanityFetch({
    query: fetchBlogCategories,
  });

  const { data: posts } = await sanityFetch({
    query: fetchInitialPosts,
  });

  return (
    <section>
      <div className='bg-darkPurple h-[400px] relative'>
        <Image
          src={'/blog-bg.png'}
          alt=''
          width={1000}
          height={1000}
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
        {/* center horizontally on bottom */}
        <Image
          src={'/blog-money.svg'}
          alt=''
          width={150}
          height={168}
          className='absolute -bottom-12 left-1/2 transform -translate-x-1/2'
        />
      </div>

      <BlogFilter categories={categories} posts={posts} />
    </section>
  );
}
