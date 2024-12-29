/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Button from './shared/Button';
import { Category, Post } from '../../sanity.types';
import { urlFor } from '@/sanity/lib/image';
import CustomPortableText from './shared/CustomPortableText';
import Link from 'next/link';

const BlogFilter = ({
  categories,
  posts: initialPosts,
}: {
  categories: Category[];
  posts: Post[];
}) => {
  const [activeFilter] = useState('All');
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const lastPost = posts[posts.length - 1];

      const searchParams = new URLSearchParams({
        lastPublishedAt: lastPost.publishedAt || '',
        lastId: lastPost._id || '',
        category: activeFilter.toLowerCase(),
      });

      const response = await fetch(`/api/blogs?${searchParams}`);
      const { posts: newPosts } = await response.json();

      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  }, [activeFilter, posts, loading, hasMore]);

  // const handleFilterChange = useCallback(async (newCategory: string) => {
  //   setActiveFilter(newCategory);
  //   setLoading(true);

  //   try {
  //     const searchParams = new URLSearchParams({
  //       category: newCategory.toLowerCase(),
  //     });

  //     const response = await fetch(`/api/blogs?${searchParams}`);
  //     const { posts: newPosts } = await response.json();

  //     setPosts(newPosts);
  //     setHasMore(newPosts.length === 6); // If we got full page, assume there's more
  //   } catch (error) {
  //     console.error('Error filtering posts:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    setPosts(initialPosts);
    setHasMore(true);
  }, [activeFilter, initialPosts]);

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
          <li
            // onClick={() => handleFilterChange('all')}
            className={`cursor-pointer underline hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon
                  ${activeFilter === 'all' ? 'decoration-lemon' : 'decoration-transparent'}`}
          >
            All{' '}
          </li>

          {categories?.map((category) => (
            <li
              key={category._id}
              // onClick={() => handleFilterChange(category?._id ?? '')}
              className={`cursor-pointer underline hover:underline transition-all duration-300 underline-offset-8 hover:decoration-lemon
                  ${activeFilter === category.title ? 'decoration-lemon' : 'decoration-transparent'}`}
            >
              {category.title}
            </li>
          ))}
        </ul>

        {/* Blog Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col gap-5 cursor-pointer hover:scale-[1.01] transition-all duration-300'
                // onClick={() => handleBlogClick(post.slug?.current ?? '')}
              >
                <Image
                  src={urlFor(post?.mainImage || {})?.url() ?? ''}
                  alt={post.title ?? ''}
                  width={550}
                  height={351}
                  className='w-auto h-[300px] object-cover rounded-[10px]'
                />
                <h3 className='text-2xl text-darkGrey font-bold font-montserrat'>
                  <Link
                    href={`/blogs/${post.slug?.current}`}
                    className='inline px-1 hover:bg-lemon transition-all duration-300 hover:underline'
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className='text-lightGrey line-clamp-2'>
                  <CustomPortableText content={post.excerpt} />
                </p>
                <div className='flex flex-col gap-2'>
                  <ul className='flex items-center gap-2'>
                    {post.categories?.map((category) => (
                      <li
                        //@ts-expect-error
                        key={category?.title}
                        className='text-xs bg-[#F5F7F9] border-2 border-lemon rounded-[40px] px-4 py-1 text-lightGrey'
                      >
                        {/* @ts-expect-error */}
                        {category?.title}
                      </li>
                    ))}
                  </ul>
                  <div className='flex items-center gap-2 text-sm'>
                    <p className=' text-darkGrey'>
                      By {/* @ts-ignore */}
                      {(post?.author as string) ?? 'Unknown'}
                    </p>
                    <span className='text-lightGrey text-base'>•</span>
                    <p className=' text-lightGrey'>
                      {new Date(post?.publishedAt || '').toLocaleDateString(
                        undefined,
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full py-7 text-center text-darkGrey text-lg'>
              No posts found for the selected filter: {activeFilter}
            </div>
          )}
        </div>

        <div className='col-span-full flex justify-center mt-10'>
          <Button
            text={loading ? 'Loading...' : 'View More Posts'}
            className='bg-lemon text-darkPurple uppercase font-bold text-sm mx-auto md:ml-20 md:mr-0'
            disabled={loading || !hasMore}
            onClick={handleLoadMore}
          />
        </div>
      </div>

      {/* Recent Posts */}
      {/* <div className='max-w-7xl mx-auto px-5 py-20'>
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
      </div> */}
    </section>
  );
};

export default BlogFilter;
