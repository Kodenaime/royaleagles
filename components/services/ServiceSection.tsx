import React from 'react'
import SectionHead from '../layout/SectionHead'
import ServicesCard from './ServicesCard'

const serviceData = [
  {
    title: "Household Care & Support",
    description: "Practical help to maintain a clean, safe, and well-managed home environment.",
    items: ["Household Tasks"],
    image: '/home/service1.webp'
  },
  {
    title: "Employment & Education Support",
    description: "Support to access, maintain, and succeed in work or learning opportunities.",
    items: ["Assist Access / Maintain Employ"],
    image: '/home/service2.webp'
  },
  {
    title: "Life Skills Support & Development",
    description: "Building confidence and essential skills for greater independence and growth.",
    items: ["Development – Life Skills", "Assist-Life Stage, Transition"],
    image: '/home/service3.webp'
  },
  {
    title: "Health, Travel & Mobility Support",
    description: "Assistance to stay mobile, attend appointments, and manage health needs.",
    items: ["Assist-Travel / Transport", "Community Nursing Care"],
    image: '/home/service4.webp'
  },
  {
    title: "Daily Living & Personal Care",
    description: "Personalized assistance with daily routines to enhance comfort and well-being.",
    items: ["Personal Care", "Showering & Dressing Assistance"],
    image: '/home/service5.webp'
  },
  {
    title: "Community & Social Engagement",
    description: "Encouraging active participation in community life and social activities.",
    items: ["Social Outings", "Community Group Participation"],
    image: '/home/service6.webp'
  },
];

const Services:React.FC = () => {
  return (
    <section id='services'>            
      <div className='section-content'>
        <SectionHead 
          title="Services" 
          tagline={<>How we <span className='text-primary'>Support</span> You</>} 
          description="Flexible, in-home support designed around comfort, dignity, and individual needs." 
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-10'>
          {serviceData.map((service, index) => (
            <ServicesCard 
              key={index}
              title={service.title}
              description={service.description}
              items={service.items}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
