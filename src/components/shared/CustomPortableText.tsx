import React from 'react';
import { PortableText, PortableTextReactComponents } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className='font-abeezee text-lg md:text-xl text-subdued mb-4'>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className='pl-4 border-l-4 border-primary italic text-lg md:text-xl my-8'>
        {children}
      </blockquote>
    ),
    h2: ({ children }) => (
      <h2 className='text-3xl md:text-4xl font-bold mt-8 mb-4'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl md:text-3xl font-semibold mt-6 mb-3 '>
        {children}
      </h3>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className='underline hover:bg-lime-400 hover:text-black transition-colors duration-200'
          target={!value.href.startsWith('/') ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      return (
        <div className='relative w-full h-[300px] md:h-[400px] my-6'>
          <Image
            src={urlFor(value)?.url() ?? ''}
            alt={value.alt || ' '}
            className='object-cover rounded-lg'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      );
    },
  },
  listItem: {
    bullet: ({ children }) => (
      <li className='font-abeezee text-lg list-disc md:text-xl text-subdued  mb-5'>
        {children}
      </li>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc list-outside mb-4 space-y-1 ml-10'>
        {children}
      </ul>
    ),
  },
};

function CustomPortableText({ content }: Props) {
  return <PortableText value={content} components={portableTextComponents} />;
}

export default CustomPortableText;
