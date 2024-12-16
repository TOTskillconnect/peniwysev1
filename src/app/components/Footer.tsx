import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({darkMode}: {darkMode?: boolean}) => {

  return (
    <footer className={`${darkMode ? 'bg-primary' : 'bg-darkPurple'} pt-12 pb-8 px-5`}>
      <div className={`${darkMode ? 'bg-darkPurple' : 'bg-primary'} max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-5 lg:h-[76px] rounded-2xl px-[35px] lg:px-5 relative mb-10 lg:mb-0 gap-10 lg:gap-0`}>
        {
          darkMode ? <Image src={"/logo-dark.svg"} alt="" width={87} height={49} /> : <Image src={"/logo.svg"} alt="" width={87} height={49} />
        }

      {/* Desktop Menu */}
      <div className={`${darkMode ? 'text-lemon' : 'text-subdued'} flex flex-col lg:flex-row items-center gap-6`}>
        <Link href="/">Home</Link>
        <span className="text-pink hidden lg:block">|</span>
        <Link href="/">Features</Link>
        <span className="text-pink hidden lg:block">|</span>
        <Link href="/">How it Works</Link>
        <span className="text-pink hidden lg:block">|</span>
        <Link href="/">Blogs</Link>
        <span className="text-pink hidden lg:block">|</span>
        <Link href="/">FAQs</Link>
      </div>

      <div className={`${darkMode ? 'text-lemon' : 'text-subdued'} flex gap-3`}>
        <p>Follow us:</p>
        <div className="flex gap-4">
          {
            darkMode ? <Image src={"/instagram-dark.svg"} alt="" width={20} height={20} /> : <Image src={"/instagram.svg"} alt="" width={20} height={20} />
          }
          {
            darkMode ? <Image src={"/facebook-dark.svg"} alt="" width={20} height={20} /> : <Image src={"/facebook.svg"} alt="" width={20} height={20} />
          }
          {
            darkMode ? <Image src={"/behance-dark.svg"} alt="" width={18} height={18} /> : <Image src={"/behance.svg"} alt="" width={18} height={18} />
          }
          {
            darkMode ? <Image src={"/twitter-dark.svg"} alt="" width={18} height={18} /> : <Image src={"/twitter.svg"} alt="" width={18} height={18} />
          }
        </div>
      </div>
      </div>

      <div className={`${darkMode ? 'text-darkPurple' : 'text-[#A0A3A6]'} text-center mt-10`}>
      2024 Peniwyse - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
