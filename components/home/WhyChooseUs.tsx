import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    "We respect every life story",
    "We listen deeply",
    "We deliver reliable, professional care",
    "We advocate for those we serve",
    "We build connections that feel like family",
  ];

  return (
    <section id="why-choose-us" className='bg-[#FAFAFA]'>
      <div className='section-content'>
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex-1 space-y-8">
            <div className='flex items-center justify-between flex-wrap gap-2'>
              <div>
                <div className="flex items-center space-y-4 gap-3">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="text-primary font-semibold tracking-wide text-[18px]">
                    Why Choose Us
                  </span>
                </div>
                {/* Main Heading */}
                <h2 className="text-[40px] md:text-[44px] font-bold text-primary-text-dark leading-tight">
                  Our<span className="ml-2 text-primary">Care</span> difference
                </h2>
              </div>

              {/* Action Button */}            
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow">
                Contact Us
              </Link>
            </div>

            <div className="space-y-3">
              {/* NDIS Badge */}
              <div className="flex items-center gap-3">
                <div className='flex items-center gap-2'>
                  <img src="/ndis.webp" alt="ndis icon" />
                  <p className='text-xl font-semibold'>NDIS-registered provider</p>
                </div>
              </div>

              {/* Benefits Grid */}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-700">
                    <Check className="text-black shrink-0" size={18} strokeWidth={3} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>

        {/* Large Feature Image */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video md:aspect-21/9 mt-10">
          <Image
            src="/home/why.webp" 
            alt="Caregiver supporting woman in wheelchair" 
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;