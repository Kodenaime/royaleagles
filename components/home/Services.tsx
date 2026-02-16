import React from 'react'
import SectionHead from '../layout/SectionHead'
import ServiceCard from './ServiceCard'
import Link from 'next/link';

const serviceData = [
    {
        description: "Daily Living & Personal Care",
        image: '/home/service1.webp'
    },
    {
        description: "Home & Household Care/Support",
        image: '/home/service2.webp'
    },
    {
        description: "Life Skills Support & Development",
        image: '/home/service3.webp'
    },
    {
        description: "Health, Travel & Mobility Support",
        image: '/home/service4.webp'
    },
    {
        description: "Community & Social Engagement",
        image: '/home/service5.webp'
    },
    {
        description: "Employment & Education Support",
        image: '/home/service6.webp'
    },
]

const Services:React.FC = () => {
  return (
    <section id='services'>            
        <div className='section-content'>
            <SectionHead 
                title="Services" 
                tagline={<>How we <span className='text-primary'>Support</span> You</>} 
                description="Flexible, in-home support designed around comfort, dignity, and individual needs." 
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10'>
                {serviceData.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
            <div className='flex justify-center mt-5 md:mt-10'>
                <Link href="/services" className='bg-primary text-white px-8 py-4 font-black rounded-full'>View Details</Link>
            </div>
        </div>
    </section>
  )
}

export default Services
