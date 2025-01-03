'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import Navbar from '@/components/shared/Navbar';
import { SiteContent } from '../../../sanity.types';
import Typewriter from '@/components/shared/animated-components/Typewriter';
import SubmitLeadForm from './SubmitLeadForm';

const Hero = ({ data }: { data: SiteContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className='bg-darkPurple relative text-white px-5 py-12 md:px-10'>
        <div className='max-w-7xl mx-auto'>
          <Image
            src={'/hero-bg.png'}
            alt=''
            width={1000}
            height={1000}
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
          <Navbar />

          <div className='flex items-center flex-col md:flex-row justify-between gap-10 container mx-auto relative'>
            <div className='basis-1/2 '>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3'>
                {data?.landingPage?.hero?.prefix}
                <span className='text-lemon ml-2'>
                  <Typewriter
                    words={
                      data?.landingPage?.hero?.highlightedText?.split(',') || []
                    }
                    delay={2000}
                  />
                </span>
              </h1>
              <p>{data?.landingPage?.hero?.description}</p>

              <div className='flex items-center flex-wrap gap-[18px] mt-10'>
                <Button
                  text='Get Started'
                  arrowType='dark'
                  className='bg-lemon text-subdued border-lemon'
                  onClick={() => setIsOpen(true)}
                />
                <Button
                  text='Join Community'
                  arrowType='light'
                  className='bg-transparent border text-white border-white'
                />
              </div>
            </div>
            <div className='basis-1/2 relative w-full aspect-square'>
              <Image
                src={'/landing/hero_image.png'}
                alt=''
                fill
                className='object-contain animate-bounce-slow'
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
      <SubmitLeadForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Hero;
