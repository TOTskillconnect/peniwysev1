import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='max-w-7xl mx-auto px-5 pt-8 pb-0 lg:pb-6'>
        <Navbar darkMode />
      </header>
      <main className='min-h-screen '>{children}</main>
      <Footer darkMode />
    </>
  );
}

export default layout;
