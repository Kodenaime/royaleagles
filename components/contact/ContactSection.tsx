import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <div className="section-content flex flex-col space-y-16">
        
        {/* Top Section: Responsive Header & Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-20">
          <div className="flex-1 space-y-4">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-primary"></div>
              <span className="text-primary font-semibold tracking-widest capitalize text-[16px]">
                Contact Us
              </span>
            </div>

            <h2 className="text-[40px] md:text-[44px] font-bold text-primary-text-dark leading-[1.15]">
              How To <span className="text-primary">Reach</span> Us
            </h2>
          </div>

          {/* Description */}
          <p className="flex-1 text-primary-text text-[16px] md:text-[18px] leading-relaxed max-w-xl">
            Reach out anytime, our friendly team is here to help with guidance, updates, and care support.
          </p>
        </div>

        {/* Middle Section: Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Form */}
          <form 
            action="https://formspree.io/f/mnjbqnop" 
            method="POST" 
            className="bg-white p-8 md:px-[32px] py-[24px] rounded-[18px] shadow-sm border border-gray-100 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800 ml-1">First name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  required
                  placeholder="Joyce..." 
                  className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800 ml-1">Last name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  required
                  placeholder="Young" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="joyce@google.com" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-800 ml-1">Phone number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+1 865-927-5542" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 ml-1">Message</label>
              <textarea 
                rows={5} 
                name="message" 
                required
                placeholder="Leave us a message..." 
                className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-gray-400"
              ></textarea>
            </div>

            {/* Hidden field to prevent SPAM  */}
            <input type="text" name="_gotcha" className="hidden" />

            <button 
              type="submit" 
              className="w-full sm:w-fit bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Send Message
              <ArrowRight size={22} />
            </button>
          </form>

          {/* Map Integration */}
          <div className="h-full min-h-[450px] rounded-[18px] overflow-hidden shadow-inner border border-gray-100 bg-slate-900">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.187342939763!2d115.9521319!3d-31.7828065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32cba9966e344d%3A0x6a0e633d317498c!2s304%20The%20Broadway%2C%20Ellenbrook%20WA%206069!5e0!3m2!1sen!2sau!4v1700000000000" 
              className="w-full h-full border-none filter invert-90 hue-rotate-180 contrast-100 brightness-90"
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section: Contact Cards */}
        <div className="space-y-10 pt-8">
          <h3 className="font-bold text-primary-text-dark text-[40px] md:text-[44px]">
            Contact <span className="text-primary">Cards</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="px-[32px] py-[24px] rounded-[18px] border-2 border-primary/10 bg-white hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <Mail size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary-text-dark uppercase tracking-wide">Email address</h4>
                <p className="text-normal lg:text-normal-desktop text-slate-600 font-medium">info@royaleagles.com.au</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="px-[32px] py-[24px] rounded-[18px] border-2 border-primary/10 bg-white hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <Phone size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary-text-dark uppercase tracking-wide">Phone number</h4>
                <div className="text-normal lg:text-normal-desktop text-slate-600 font-medium space-y-1">
                  <p>Mobile 1: +61421479422</p>
                  <p>Mobile 2: +61 421479422</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="px-[32px] py-[24px] rounded-[18px] border-2 border-primary/10 bg-white hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <MapPin size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary-text-dark uppercase tracking-wide">Location</h4>
                <p className="text-normal lg:text-normal-desktop text-slate-600 font-medium leading-relaxed">
                  304 The Broadway Ellenbrook WA 6069
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;