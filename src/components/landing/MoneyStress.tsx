'use client';

import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import { SiteContent } from '../../../sanity.types';
import CustomPortableText from '../shared/CustomPortableText';
import SubmitLeadForm from './SubmitLeadForm';

const MoneyStress = ({ data }: { data: SiteContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='bg-primary text-darkPurple px-5 py-12 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center flex-col md:flex-row justify-between gap-10 container mx-auto relative'>
          <div className='basis-1/2 relative w-[80%] md:w-full'>
            <div className='bg-white rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[475px] lg:h-[475px] flex items-center justify-center mx-auto'>
              <Image
                src={'/moneystress.gif'}
                alt=''
                width={475}
                height={475}
                className='object-contain w-[90%] h-[90%]'
                unoptimized
              />
            </div>
          </div>
          <div className='basis-1/2 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3'>
              {data?.landingPage?.moneyStress?.title}
            </h2>
            <p className='font-abeezee text-lg md:text-xl text-subdued'>
              <CustomPortableText
                content={data?.landingPage?.moneyStress?.description}
              />
            </p>

            <div className='flex items-center justify-center md:justify-start flex-wrap gap-[18px] mt-10'>
              <Button
                text='Get Started'
                arrowType='light'
                className='bg-darkPurple text-white'
                onClick={() => setIsOpen(true)}
              />
              <Button
                text='Join Community'
                arrowType='dark'
                className='bg-transparent border text-darkPurple border-darkPurple'
              />
            </div>
          </div>
        </div>
      </div>

      <SubmitLeadForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default MoneyStress;
