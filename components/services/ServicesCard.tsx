import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ServicesCardProps {
  title: string;
  description: string;
  items: string[];
  image: string | StaticImageData;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, description, items, image }) => {
  return (
    <div className='bg-[#FAFAFA] p-4 md:p-8 rounded-[18px] border border-gray-100 flex flex-col h-full hover:shadow transition-shadow'>
      <div className='flex-1 flex flex-col gap-2 mb-8'>
        {/* Card Title */}
        <h4 className='text-primary-text-dark text-xl lg:text-2xl font-bold leading-tight'>
          {title}
        </h4>
        
        {/* Card Summary */}
        <p className='text-slate-600 text-normal text-[18px] md:text-[20px] leading-relaxed'>
          {description}
        </p>

        {/* Dynamic List Items */}
        <ul className='space-y-2 mt-2'>
          {items.map((item, index) => (
            <li key={index} className='flex items-center gap-2 text-slate-700 text-sm lg:text-base'>
              <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0' />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Image at the Bottom */}
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
  );
};

export default ServicesCard;