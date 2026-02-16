import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CtaSectionProps {
  image: string;
  title: React.ReactNode;
  description: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ image, title, description }) => {
  return (
    <section id="contact-cta" className="px-4 md:px-6 lg:px-8 bg-[#FAFAFA] text-primary-text">
      {/* Container with background image and overlay */}
      <div className="section-content relative w-full overflow-hidden rounded-4xl py-8 md:py-12 flex items-center justify-center">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={image} 
            alt="Caregiver image" 
            fill 
            priority 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 px-6 text-center max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              Get in Touch
            </Link>

            <a 
              href="tel:+61421479422" 
              className="w-full sm:w-auto border-2 border-white/30 underline backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-slate-900 transition-all"
            >
              <Phone size={20} />
              +61 421 479 422
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;