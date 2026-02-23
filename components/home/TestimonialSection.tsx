'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHead from '../layout/SectionHead';
import { User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  //image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "H A",
    location: "Perth Western Australia",
    rating: 5.0,
    quote: "I have had the privilege of working with Nurse Adeniyi and hearing, first-hand, countless accounts of the exceptional care and support she has provided to patients over many years. These stories are consistent, sincere, and reflective of a nurse who genuinely places patient wellbeing at the centre of her practice.",
    //image: "https://i.pravatar.cc/150?u=john"
  },
  {
    id: 2,
    name: "G M",
    location: "",
    rating: 5.0,
    quote: "Her assistance to us during this difficult time when my wife and I welcomed our first child is immeasurable and left us speechless. She cared for the baby and my wife during this time, including bathing and feeding the baby, looking after the child while allowing my wife to catch up on rest, cleaning the house and making food for us, providing great advise, and going to the hospital appointments with us. Her quality of care is both personal, professional, and extremely kind and thoughtful. We cannot but be truly grateful for the selfless service flowing from a heart of Gold. Her care is not only skilled and experienced, but also grounded in character.",
    //image: "https://i.pravatar.cc/150?u=emily"
  },
   {
    id: 3,
    name: "E S",
    location: "Brisbane",
    rating: 5.0,
    quote: "As a nurse and a long-standing servant of the community, Felicia brings professionalism, calm assurance, and empathy into everything she does. She listens attentively, treats people with dignity, and consistently places the wellbeing of others at the centre of her work. Her care is not only skilled and experienced, but also grounded in character.",
    //image: "https://i.pravatar.cc/150?u=emily"
  },
 
];

const TestimonialSection: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#FAFAFA]">
      <div className='section-content'>
        <div className="flex flex-col items-center text-center mb-12">
          <SectionHead 
            title="Testimonials" 
            tagline={<>Hear from Our <span className='text-primary'>Clients</span></>} 
            description="Real stories from families who’ve experienced compassionate care." 
          />
        </div>

        {/* Slider Container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: ["0", "-50%"], 
            }}
            transition={{
              duration: 35, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[300px] md:w-[450px] bg-white rounded-xl p-4 md:p-8 shadow border border-gray-100"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-700">{item.rating.toFixed(1)}</span>
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic text-lg mb-8 leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                 <User className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Optional: Gradient Overlays for Fade Effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;