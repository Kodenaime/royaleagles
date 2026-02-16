'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about-details" className="bg-[#FAFAFA]">
      <div className='section-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        
        {/* Image Grid  */}
        <div className="order-2 lg:order-1 grid grid-cols-2 grid-rows-2 gap-4 h-[450px] md:h-[600px]">
          
          {/* Large Vertical Image */}
          <div className="relative row-span-2 rounded-4xl overflow-hidden shadow-lg border border-white">
            <Image 
              src="/about/about1.webp" 
              alt="Caregiver with elderly woman" 
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          
          {/* Top Right Image */}
          <div className="relative rounded-4xl overflow-hidden shadow-lg border border-white">
            <Image 
              src="/about/about2.webp" 
              alt="Holding hands" 
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative rounded-4xl overflow-hidden shadow-lg border border-white">
            <Image 
              src="/about/about3.webp" 
              alt="Compassionate hug" 
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 flex flex-col space-y-12">
          {/* Our Approach  */}
          <div className="space-y-4">
            <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-slate-900 leading-tight">
              Our Approach
            </h3>
            <p className="text-slate-600 text-normal lg:text-normal-desktop leading-relaxed">
              We take a thoughtful, person-first approach to care. Every service is planned 
              around individual needs, routines, and preferences—delivered with professionalism, 
              empathy, and genuine human connection. Our focus is not just on care tasks, but 
              on building trust, comfort, and peace of mind for families.
            </p>
          </div>

          {/* Our Values  */}
          <div className="space-y-4">
            <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-slate-900 leading-tight">
              Our Values
            </h3>
            <p className="text-slate-600 text-normal lg:text-normal-desktop leading-relaxed">
              Our care is guided by compassion, respect, and dignity. We believe every 
              individual deserves to feel safe, valued, and supported in their own home. 
              Through integrity, consistency, and family-like support, we create meaningful 
              care experiences that truly make a difference.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;