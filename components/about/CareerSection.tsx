'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, CheckCircle2 } from 'lucide-react';

const CareerSection: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-filled email details
  const email = "career@royaleagles.com.au";
  const subject = encodeURIComponent("Application for Caregiver Role");
  const mailtoLink = `mailto:${email}?subject=${subject}`;

  const handleApplyClick = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 15000);
  };

  return (
    <section id="careers" className="bg-white relative">
      <div className="section-content">
        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-gray-100 relative">
          
          {/* Success Overlay Message */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/95 rounded-[2.5rem] flex items-center justify-center p-8 animate-in fade-in duration-300">
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center max-w-md space-y-4">
                <div className="flex justify-center">
                  <CheckCircle2 size={64} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Opening your Email Client...</h3>
                <p className="text-slate-600">
                  We&apos;ve prepared an email to  <b>{email}</b>. 
                  Please attach your CV and a brief cover letter before hitting send!
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Back 
                </button>
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 space-y-8 order-1">
            <div className="space-y-4">
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-slate-900 leading-[1.1]">
                Apply to Join Our <br />
                <span className="text-primary">Care Team</span>
              </h2>
              <p className="text-slate-600 text-normal lg:text-normal-desktop leading-relaxed max-w-xl">
                We&apos;re looking for compassionate, dependable caregivers who are passionate 
                about supporting families and improving lives. If you&apos;re experienced in 
                home care and ready to make a difference, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="pt-2">
              <Link 
                href={mailtoLink}
                onClick={handleApplyClick}
                className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1 active:scale-95"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Image Area */}
          <div className="flex-1 w-full order-2">
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
              <Image 
                src="/about/job.png" 
                alt="Compassionate caregivers" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSection;