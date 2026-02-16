import React from 'react';
import SectionHead from '../layout/SectionHead';
import Image from 'next/image';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="space-y-12">
      <div className='section-content'>
        {/* Centered Header */}
        <div className="text-center">
          <SectionHead
            title="Leadership"
            tagline={
              <>
                Meet the <span className="text-primary">Founder</span>
              </>
            }
            description="A dedicated caregiver committed to personalised, compassionate support."
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          {/* Founder Image  */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl ">
            <Image 
              src="/about/founder.webp" 
              alt="Felicia Adeniyi - Founder of Royal Eagles" 
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Founder Details */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-slate-900">Felicia Adeniyi</h3>
              <p className="text-primary font-medium italic text-lg">
                Founder & Lead Care Provider
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Adeniyi is a highly sought-after Registered Nurse, recognised for her genuine compassion, 
              exceptional clinical expertise, and outstanding patient-centred care. With over 19 years of experience in the healthcare 
              and care sector, Felicia has worked across rural, outer metropolitan, and metropolitan settings, including hospitals and 
              general practices. Her diverse experience has equipped her with a deep understanding of patient needs across different 
              communities and healthcare environments. Felicia holds a Bachelor of Nursing from the University of South Australia, 
              where she received the Dean’s Award for Academic Excellence in her first year. She is consistently highly rated by 
              patients and clients for her active listening, problem-solving skills, strong advocacy, and unwavering commitment to 
              delivering quality care. Outside of her professional role, Felicia is deeply committed to community service and volunteering.
              She is passionate about serving humanity, supporting others, and finding meaningful solutions that positively impact lives.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="space-y-1">
                <p className="text-4xl font-bold text-primary">19+</p>
                <p className="text-slate-900 font-bold text-sm leading-tight">
                  Years of Experience
                </p>
              </div>
              {/* <div className="space-y-1">
                <p className="text-4xl font-bold text-primary">100+</p>
                <p className="text-slate-900 font-bold text-sm leading-tight">
                  Clients
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;