'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import SubmitLeadForm from '../landing/SubmitLeadForm';

const Navbar = ({ darkMode }: { darkMode?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLeadForm, setIsOpenLeadForm] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between py-5 ${darkMode ? 'bg-darkPurple' : 'bg-primary'} h-[76px] rounded-full px-[35px] lg:px-5 relative mb-10 lg:mb-0`}
    >
      {darkMode ? (
        <Image src={'/logo-dark.svg'} alt='' width={87} height={49} />
      ) : (
        <Image src={'/logo.svg'} alt='' width={87} height={49} />
      )}

      {/* Desktop Menu */}
      <div
        className={`${darkMode ? 'text-lemon' : 'text-subdued'} hidden lg:flex items-center gap-6`}
      >
        <Link href='/'>Home</Link>
        <span className='text-pink'>|</span>
        <Link href='/#features'>Features</Link>
        <span className='text-pink'>|</span>
        <Link href='/#how-it-works'>How it Works</Link>
        <span className='text-pink'>|</span>
        <Link href='/blogs'>Blogs</Link>
        <span className='text-pink'>|</span>
        <Link href='/#faqs'>FAQs</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-subdued'
        onClick={() => setIsOpen(!isOpen)}
      >
        {darkMode ? (
          <Image src={'/hamburger-dark.svg'} alt='' width={32} height={32} />
        ) : (
          <Image src={'/hamburger.svg'} alt='' width={32} height={32} />
        )}
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div className='p-5 h-full flex flex-col'>
          <button
            className='absolute top-5 right-5 text-subdued'
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex flex-col gap-6 mt-12 text-subdued'>
            <Link href='/' onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href='/#features' onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href='/#how-it-works' onClick={() => setIsOpen(false)}>
              How it Works
            </Link>
            <Link href='/blogs' onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <Link href='/#faqs' onClick={() => setIsOpen(false)}>
              FAQs
            </Link>
          </div>
          <div className='mt-auto md:hidden'>
            <Button
              text='Sign Up'
              className='bg-darkPurple text-white w-[133px] mx-auto'
            />
          </div>
        </div>
      </div>

      <div className='hidden md:flex gap-3'>
        <Button
          text='Sign Up'
          className={`${darkMode ? 'bg-lemon text-darkPurple' : 'bg-darkPurple text-white'}`}
          onClick={() => setIsOpenLeadForm(true)}
        />
        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-subdued'
          onClick={() => setIsOpen(!isOpen)}
        >
          {darkMode ? (
            <Image src={'/hamburger-dark.svg'} alt='' width={32} height={32} />
          ) : (
            <Image src={'/hamburger.svg'} alt='' width={32} height={32} />
          )}
        </button>
      </div>

      <SubmitLeadForm
        isOpen={isOpenLeadForm}
        onClose={() => setIsOpenLeadForm(false)}
      />
    </nav>
  );
};

export default Navbar;
