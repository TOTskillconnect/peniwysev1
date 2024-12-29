import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
  arrowType?: 'dark' | 'light';
};

const Button = ({ text, className, arrowType, ...rest }: Props) => {
  return (
    <button
      className={`${className} px-8 h-12 rounded-full flex items-center gap-2 font-medium hover:transform hover:scale-[1.02] hover:shadow-sm transition-transform duration-300 ease-in-out ${rest.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      {...rest}
    >
      {text}
      {arrowType &&
        (arrowType === 'dark' ? (
          <Image src={'/dark-arrow.svg'} alt='' width={18} height={18} />
        ) : (
          <Image src={'/light-arrow.svg'} alt='' width={18} height={18} />
        ))}
    </button>
  );
};

export default Button;
