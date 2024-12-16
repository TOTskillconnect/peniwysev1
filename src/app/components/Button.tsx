import Image from 'next/image'
import React from 'react'

type Props = {
  text: string
  icon?: React.ReactNode
  className?: string
  arrowType?: 'dark' | 'light'
}

const Button = (props: Props) => {
  return (
    <button className={`${props.className} px-8 h-12 rounded-full flex items-center gap-2 font-medium hover:transform hover:scale-105 hover:shadow-lg cursor-pointer transition-transform duration-300 ease-in-out`}>
      {props.text}
      {props.arrowType && (props.arrowType === 'dark' ? <Image src={'/dark-arrow.svg'} alt='' width={18} height={18} /> : <Image src={'/light-arrow.svg'} alt='' width={18} height={18} />)}
    </button>
  )
}

export default Button