import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className='bg-[#FAFAFA]'>
      <div className="section-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Image Container  */}
        <div className="relative w-full order-2 lg:order-1">
          <div className="rounded-[16px] overflow-hidden shadow-xl aspect-square md:aspect-video lg:aspect-square">
            <Image 
              src="/home/about.webp" 
              alt="Caregiver with elderly patient" 
              fill 
              priority 
              className="object-cover rounded-2xl" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col space-y-4 order-1 lg:order-2">
          {/* Section Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest capitalize text-[16px]">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] md:text-[44px] font-bold text-slate-900 leading-[1.15]">
            <span className="text-primary">Quality</span> Care Built on <br className="hidden md:block" />
            Trust and Standards
          </h2>

          {/* Description Text */}
          <div className="space-y-3 text-[16px] md:text-[18px] text-primary-text leading-relaxed">
            <p>
              Welcome to a place where care is deliberate and support is delivered with purpose. 
              We exist to uplift lives through compassionate service, professional excellence and 
              genuine human connection.
            </p>
            
            <p>
              Our identity blends the warmth of the heart with the strength of the eagle — 
              caring deeply while protecting and advocating strongly.
            </p>

            <p>
              At the core of our work is a belief that everyone deserves quality care, respect and 
              dignity in their care settings. 
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-4 md:mt-6">
            <Link href="/about" className="w-fit bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1 active:scale-95">
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;