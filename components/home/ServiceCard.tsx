import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  description: string;
  image: string | StaticImageData;
}

const ServiceCard:React.FC<ServiceCardProps> = ({ description, image }) => {
  return (
    <div className='bg-gray-50 p-3 rounded border border-gray-200 flex flex-col gap-4'>
      <div>
        <p className='text-primary-text justify-start text-[18px] font-semibold'>{description}</p>
      </div>
      <div className='relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-50'>
        <Image 
          src={image} 
          alt={description}
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default ServiceCard