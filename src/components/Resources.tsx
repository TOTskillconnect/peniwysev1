import Image from 'next/image';
import React from 'react';
import { achievements } from '../data/data';
import Button from './shared/Button';

const Resources = () => {
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 relative mb-20'>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center border-b-[3px] p-7 rounded-xl bg-white bg-opacity-[16%] border-b-lemon my-auto ${index === 1 ? 'lg:h-[450px]' : 'lg:h-[374px]'}`}
            >
              <div className='flex flex-col items-center justify-center flex-1'>
                <Image
                  className='mb-5'
                  src={achievement.icon}
                  alt={achievement.title}
                  width={192}
                  height={192}
                />
                <h3 className='text-2xl md:text-3xl font-extrabold mb-[6px] w-[80%]'>
                  {achievement.title}
                </h3>
                <p className='underline font-abeezee w-[80%]'>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          text='View More'
          className='bg-lemon text-darkPurple mx-auto'
          arrowType='dark'
        />
      </div>
    </section>
  );
};

export default Resources;
