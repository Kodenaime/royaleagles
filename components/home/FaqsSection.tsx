'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ExternalLink } from 'lucide-react';
import SectionHead from '../layout/SectionHead';

interface FAQItem {
  question: string;
  answer: React.ReactNode; 
}

const faqData: FAQItem[] = [
  {
    question: "What kind of help can I get from Royal Eagles?",
    answer: "Royal Eagles supports people with disabilities through everyday help like personal care, community access, transport, household tasks and skills development, all tailored to your needs under the NDIS."
  },
  {
    question: "How do I start the NDIS application process?",
    answer: (
      <>
        You can contact a local area coordinator, phone the NDIS hotline, or submit a filled-out Access Request Form with supporting reports and evidence. The NDIS will assess your application and let you know the result.{" "}
        <a href="https://www.ndis.gov.au/contact" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
          Contact NDIS <ExternalLink size={14} />
        </a>
      </>
    )
  },
  {
    question: "Can Royal Eagles help me make the most of my NDIS plan?",
    answer: "Yes the team can help you understand your plan, organise services, and work with you to reach your personal goals by coordinating supports that fit your needs."
  },
  {
    question: "How do I know if I’m eligible for NDIS support with Royal Eagles?",
    answer: (
      <>
        To be eligible, you must meet general NDIS requirements: be under 65, live in Australia, have a permanent impairment and require disability-specific supports. The NDIS access process will determine eligibility before any support begins.{" "}
        <a href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
          Check Eligibility <ExternalLink size={14} />
        </a>
      </>
    )
  },
  {
    question: "How can I apply to join the NDIS and get support through Royal Eagles?",
    answer: (
      <>
        Start by contacting your local area coordinator or submitting an Access Request Form with evidence of your impairment. Decisions are usually made within 21 days.{" "}
        <a href="https://www.ndis.gov.au/contact" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
          Apply Now <ExternalLink size={14} />
        </a>
      </>
    )
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="section-content flex flex-col items-center">
        <div className="text-center mb-16">
          <SectionHead
            tagline="Frequently Asked Questions"
            title="FAQ"
            description="Clear, honest answers to help you feel confident every step of the way."
          />
        </div>

        <div className="w-full max-w-4xl space-y-5">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-[2.5rem] transition-all duration-300 border ${
                activeIndex === index ? 'bg-gray-50 border-primary/20' : 'bg-white border-gray-100'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                {/* Question  */}
                <span className={`text-xl lg:text-2xl font-bold transition-colors leading-tight ${
                  activeIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-primary'
                }`}>
                  {item.question}
                </span>
                
                <div className="shrink-0 ml-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-primary transition-transform duration-300">
                    {activeIndex === index ? (
                      <Minus size={22} strokeWidth={3} />
                    ) : (
                      <Plus size={22} strokeWidth={3} />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {/* Answer Text  */}
                    <div className="px-8 pb-8 text-normal lg:text-normal-desktop text-slate-600 leading-relaxed max-w-3xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;