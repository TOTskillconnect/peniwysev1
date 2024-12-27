import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScrollableContainerProps {
  scrollStep?: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  scrollStep = 80,
  scrollRef,
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to handle smooth and slow scroll
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef) return;
    const scrollAmount = scrollRef.current?.offsetWidth || 0; // Scroll by one container width

    if (direction === 'left') {
      scrollSmoothly(-scrollAmount);
    } else {
      scrollSmoothly(scrollAmount);
    }
  };

  // Scroll smoothly with smaller steps and requestAnimationFrame for slower effect
  const scrollSmoothly = (scrollAmount: number) => {
    if (!scrollRef) return;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalScroll = Math.abs(scrollAmount);
    const scrollStepSize = scrollAmount / scrollStep; // Smaller steps for smoother and slower scroll
    let scrolled = 0;

    function step() {
      if (scrolled < totalScroll) {
        scrollContainer?.scrollBy({ left: scrollStepSize });
        scrolled += Math.abs(scrollStepSize);
        requestAnimationFrame(step); // Recursive animation for smooth scrolling
      }
    }
    step();
  };

  // Function to check scroll position
  const checkScrollPosition = () => {
    if (!scrollRef) return;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  // Add a scroll event listener
  useEffect(() => {
    if (!scrollRef) return;
    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener('scroll', checkScrollPosition);

    // Cleanup listener on unmount
    return () =>
      scrollContainer?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <div className='flex flex-row bg-white h-[56px] rounded-full p-1 items-center gap-2'>
      {/* Left scroll button */}
      <div
        className={`w-10 h-10 cursor-pointer rounded-full flex justify-center items-center ${
          canScrollLeft ? 'bg-lemon' : ''
        }`}
        onClick={() => handleScroll('left')}
      >
        <Image
          src={'/landing/leftIcon.svg'}
          alt={'left scroll icon'}
          width={20}
          height={20}
        />
      </div>

      {/* Right scroll button */}
      <div
        className={`w-10 h-10 cursor-pointer rounded-full flex justify-center items-center ${
          canScrollRight ? 'bg-lemon' : ''
        }`}
        onClick={() => handleScroll('right')}
      >
        <Image
          src={'/landing/rightIcon.svg'}
          alt={'right scroll icon'}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default ScrollableContainer;
