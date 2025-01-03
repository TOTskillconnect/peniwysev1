'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { SiteContent } from '../../../sanity.types';

const YourMoney = ({ data }: { data: SiteContent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 367 + 32; // Card width (367px) + gap (32px)
      const targetScroll =
        scrollRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      // Update scroll buttons state after animation
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className='py-12 px-5 bg-[#F3F2FF]'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='md:w-[80%] mx-auto text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-subdued'>
          {data?.landingPage?.yourMoney?.title}
        </h2>
        <p className='text-subdued w-[80%] md:w-1/2 mx-auto'>
          {data?.landingPage?.yourMoney?.description}
        </p>

        {/* features cards */}
        <div
          ref={scrollRef}
          className='flex justify-start xl:justify-between gap-8 overflow-x-auto my-10 no-scrollbar scroll-smooth relative'
          onScroll={checkScroll}
        >
          {data?.landingPage?.yourMoney?.options?.map((feature, index) => (
            <div
              key={index}
              className='rounded-xl p-5 min-h-[204px] w-[367px] flex flex-col items-center justify-center gap-5 shrink-0 group relative'
              style={{
                backgroundColor: `#AB2DB508`,
                borderBottom: `3px solid #AB2DB5`,
                transition: 'border-color 0.5s ease',
              }}
            >
              {/* Default Content */}
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-700 group-hover:opacity-0'>
                <div
                  className='w-10 h-10 text-white rounded-full flex items-center justify-center'
                  style={{ backgroundColor: '#AB2DB5' }}
                >
                  <p>{index + 1}</p>
                </div>
                <h3 className='text-xl font-bold text-subdued'>
                  {feature.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
                <div className='w-10 h-10 text-white rounded-full flex items-center justify-center'>
                  <Image
                    src={feature.icon || '/feature2-1.svg'}
                    alt={feature.title || 'Feature 1'}
                    width={48}
                    height={48}
                  />
                </div>
                <p className='text-subdued px-4 text-center'>
                  {feature.description}
                </p>
              </div>
              <style jsx>{`
                .group:hover {
                  border: 3px solid #ab2db5 !important;
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* navigation */}
        <div className='flex mx-auto w-fit justify-center gap-4 bg-primary rounded-full p-2 border border-violet-200'>
          <button
            className={`rounded-full p-2 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-lemon'}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <Image
              src={'/arrow-left.svg'}
              alt='previous icon'
              width={24}
              height={24}
            />
          </button>
          <button
            className={`rounded-full p-2 ${canScrollRight ? 'hover:bg-lemon' : 'opacity-50 cursor-not-allowed'}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <Image
              src={'/arrow-left.svg'}
              className='rotate-180'
              alt='next icon'
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YourMoney;
