import React from 'react'

interface SectionHeadProps {
  title: string;
  tagline: React.ReactNode; 
  description: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title, tagline, description }) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
        {/* Section Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="text-[16px] font-semibold tracking-wide capitalize text-primary">
            {title}
          </p>
        </div>

        {/* Main Title */}
        <h2 className="text-[40px] md:text-[44px] font-bold text-center text-primary-text-dark leading-tight">
          {tagline}
        </h2>

        {/* Description */}
        <p className="text-[16px] md:text-[20px] text-primary-text max-w-[600px] text-center">  
          {description}
        </p>
    </div>
  )
}

export default SectionHead