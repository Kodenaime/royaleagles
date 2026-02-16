import React from 'react'
import SectionHead from '../layout/SectionHead'
import ValuesCard from './ValuesCard'

const valuesData = [
  {
    title: "Compassion",
    description: "We focus on the person, not just the task, treating everyone with genuine care and understanding.",
    image: '/home/icon1.webp'
  },
  {
    title: "Protection",
    description: "We safeguard dignity, wellbeing, and safety in every interaction and service we provide.",
    image: '/home/icon2.webp'
  },
  {
    title: "Family-like Support",
    description: "We care for people as if they were part of our own family, building trust and warmth.",
    image: '/home/icon3.webp'
  },
  {
    title: "Dignity",
    description: "We honor your choices, ensure your voice is heard, and always respect your individuality.",
    image: '/home/icon4.webp'
  },
  {
    title: "Integrity",
    description: "We act with honesty and do the right thing, even when no one is watching.",
    image: '/home/icon5.webp'
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in every task, delivering care with dedication and quality.",
    image: '/home/icon6.webp'
  },
]

const ValuesSection:React.FC = () => {
  return (
    <section id='values' className=''>
      <div className='section-content'>
        <SectionHead
          title="Values"
          tagline={<> Our Core <span className='text-primary'>Values</span></>}
          description="The principles that guide how we support, respect, and protect every individual."
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10'>
            {valuesData.map((value, index) => (
              <ValuesCard 
                key={index}
                title={value.title}
                description={value.description}
                image={value.image}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection