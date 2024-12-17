"use client";

import React, { useState } from "react";
import Cta from "./Cta";
import { faqs } from "../data/data";
import Image from "next/image";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faqs' className='pt-12 pb-7 px-5 bg-primary'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center md:w-[80%] mx-auto text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-subdued'>
          Frequently Asked Questions
        </h2>
        <div className='md:w-[80%] mx-auto flex flex-col gap-5'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-darkPurple text-subdued rounded-xl p-[18px] cursor-pointer'
              onClick={() => toggleFaq(index)}
            >
              <div
                className={`flex justify-between items-center ${openIndex === index ? "mb-3" : ""}`}
              >
                <h3 className='text-lg md:text-xl font-bold text-subdued'>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Image
                    src={"/faq-close.svg"}
                    alt='toggle faq'
                    width={20}
                    height={22}
                  />
                ) : (
                  <Image
                    src={"/faq-open.svg"}
                    alt='toggle faq'
                    width={20}
                    height={22}
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className='text-subdued'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <Cta />
      </div>
    </section>
  );
};

export default Faq;
