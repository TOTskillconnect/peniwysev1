/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import Button from '@/components/shared/Button';
import ScrollableContainer from '../shared/ScrollableContainer';
import { SiteContent } from '../../../sanity.types';
import Link from 'next/link';

const WhatToAchieve = ({ data }: { data: SiteContent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className='px-5 pt-10 pb-7 text-white text-center bg-[#120140] relative overflow-hidden'>
      <Image
        src={'/blur3.svg'}
        alt=''
        fill
        className='absolute bottom-0 left-0 opacity-0 animate-fadeInOut1'
        priority
      />
      <Image
        src={'/blur2.svg'}
        alt=''
        fill
        className='absolute inset-0 opacity-0 animate-fadeInOut2'
        priority
      />
      <Image
        src={'/blur.svg'}
        alt=''
        width={758}
        height={598}
        className='absolute top-0 right-0 opacity-0 animate-fadeInOut3'
        priority
      />
      <div className='relative max-w-7xl mx-auto'>
        <h2 className='text-3xl md:w-[80%] mx-auto md:text-4xl lg:text-5xl font-extrabold mb-5 '>
          {data?.landingPage?.whatToAchieve?.title}

          <span className='text-lemon ml-2'>
            {data?.landingPage?.whatToAchieve?.suffix}
          </span>
          <span className=''>{data?.landingPage?.whatToAchieve?.suffix2}</span>
        </h2>
        <p className='font-abeezee text-2xl mb-5'>
          {data?.landingPage?.whatToAchieve?.subtitle}
        </p>

        <div
          ref={scrollRef}
          // className='noScrollbar overflow-x-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 relative mb-20'
          className='noScrollbar overflow-x-auto '
        >
          <div className='flex flex-row gap-4 items-stretch'>
            {data?.landingPage?.whatToAchieve?.options?.map(
              (achievement, index) => (
                <Link
                  // @ts-expect-error
                  href={achievement?.link ? `/blogs/${achievement?.link}` : '#'}
                  key={index}
                  className={`border-b-[3px] p-7 rounded-xl bg-white bg-opacity-[16%] border-b-lemon inline-block flex-1`}
                >
                  <div>
                    <div className='flex flex-col items-center justify-center flex-1 w-[350px] '>
                      <Image
                        className='mb-5'
                        src={achievement.icon || ''}
                        alt={achievement.title || ''}
                        width={50}
                        height={50}
                      />
                      <h3 className='text-2xl md:text-3xl font-extrabold mb-[6px] w-[80%]'>
                        {achievement.title}
                      </h3>
                      <p className='underline font-abeezee w-[80%]'>
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        <div className='flex justify-between w-full mt-16'>
          <Button
            text='View More'
            className='bg-lemon text-darkPurple'
            arrowType='dark'
          />
          <ScrollableContainer scrollRef={scrollRef} />
        </div>
      </div>
    </section>
  );
};

export default WhatToAchieve;
