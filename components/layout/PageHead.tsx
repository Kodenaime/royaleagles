'use client';

import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface PageHeadProps {
  image: string | StaticImageData;
  title: React.ReactNode;
}

const PageHead: React.FC<PageHeadProps> = ({ image, title }) => {
  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12 flex items-center justify-center h-[400px]">
      
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt="Page header background" 
          fill
          priority 
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay for Text Legibility - Keeping your exact styling */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-20 px-6 text-center max-w-3xl flex flex-col items-center">
        {/* Using your exact h2 classes */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageHead;