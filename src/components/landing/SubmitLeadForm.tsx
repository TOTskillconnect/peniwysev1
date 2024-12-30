'use client';

import React, { useState } from 'react';
import AppModal from '@/components/shared/AppModal';
import { saveEmail } from '@/actions/saveLead';
import Image from 'next/image';
import { enqueueSnackbar } from 'notistack';
import { isValidEmail } from '@/helpers/isValidEmail';

const SubmitLeadForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <AppModal isOpen={isOpen} onClose={onClose}>
        <div className='flex flex-col items-center justify-center '>
          <Image
            src={'/landing/lady_Swing.gif'}
            alt=''
            width={250}
            height={250}
            className='mb-2'
          />
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-center'>
            We are Coming Soon!
          </h1>
          <p className='text-center text-sm text-darkPurple md:w-10/12 mx-auto font-sans'>
            We&apos;re bringing something fresh and exciting to the table. Be
            the first to experience it
          </p>

          <div className='flex relative gap-2 border border-[#ECECEC] rounded-full mx-auto w-[95%] md:w-[85%] h-[60px] p-1 my-10 focus-within:border-lemon'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-[95%] md:w-[80%] p-2 rounded-full border border-transparent outline-none bg-transparent text-sm md:text-base'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              disabled={isLoading}
              onClick={async () => {
                if (!email) {
                  enqueueSnackbar('Please enter a valid email address', {
                    variant: 'error',
                  });
                  return;
                }

                if (!isValidEmail(email)) {
                  enqueueSnackbar('Please enter a valid email address', {
                    variant: 'error',
                  });
                  return;
                }

                setIsLoading(true);
                await saveEmail(email);
                setIsLoading(false);
                setEmail('');
                onClose();
                enqueueSnackbar('Thank you for joining our waitlist!', {
                  variant: 'success',
                });
              }}
              className='bg-lemon text-sm md:text-base text-darkPurple px-4 md:px-8 whitespace-nowrap rounded-full hover:transform hover:scale-[1.02] hover:shadow-sm transition-transform duration-300 ease-in-out'
            >
              {isLoading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </div>
        </div>
      </AppModal>
    </>
  );
};

export default SubmitLeadForm;
