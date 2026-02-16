import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section id='hero'>
      <div className='section-content grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16'>
        
        <div className='flex flex-col space-y-2'>
          {/* NDIS Tag */}
          <div className='flex items-center gap-3'>
            <img src="/ndis.webp" alt="ndis icon" className="w-12 h-12 object-contain" />
            <p className='text-normal md:text-normal-desktop font-semibold text-primary-text'>
              NDIS-registered provider
            </p>
          </div>

          <div className='text-left'>
            {/* Title */}
            <h1 className='text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1] text-primary-text-dark'>
              Gentle Hands, <br className="lg:block" />
              <span className='text-primary'>Strong</span> Support
            </h1>
            
            {/* Subtext */}
            <p className='mt-6 text-[18px] md:text-[20px] lg:text-[24px] text-slate-600 leading-relaxed w-full lg:max-w-xl'>
              We provide personalized Home care with compassion, dignity and family-like care 
              that puts your loved one’s comfort and safety first.
            </p>
          </div>

          {/* Buttons */}
          <div className='flex items-center gap-4 flex-wrap mt-3 md:mt-5'>
            <Link 
              href="/contact" 
              className='bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95'
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className='relative'>
          <div className='rounded-[16px] overflow-hidden shadow lg:aspect-square'>
            <Image
              src="/home/hero.webp" 
              alt="Caregiver providing support" 
              fill 
              priority 
              className="object-cover rounded-2xl" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero