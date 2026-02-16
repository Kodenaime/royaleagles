import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'  

interface ValuesCardProps {
  image: string | StaticImageData,
  title: string,
  description: string
}

const ValuesCard:React.FC<ValuesCardProps> = ({ image, title, description }) => {
  return (
    <div className='bg-gray-50 flex flex-col items-center border border-gray-100 gap-2 px-5 py-10'>
      <Image 
        src={image} 
        alt={`${title} icon`} 
        width={48}   
        height={48}  
        className="object-contain"
      />
      <h2 className='text-2xl text-primary-text-dark font-medium'>{ title }</h2>
      <p className='text-[16px] text-primary-text text-center'>{ description }</p>
    </div>
  )
}

export default ValuesCard