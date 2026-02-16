import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-200">
      <div className="w-full px-6 md:px-12 lg:px-[48px]">
        <div className="section-content">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column  */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/logo.webp" alt="Royal Eagles Logo" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-primary-text-dark">Royal Eagles</h3>
              </div>
              
              {/* Normal Text */}
              <p className="text-[16px] md:text-[18px] text-primary-text leading-relaxed max-w-sm">
                We care deeply, protect strongly and support like family. Our heart represents 
                compassion; our eagle reflects strength and excellence.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <img src="/ndis.webp" alt="ndis icon" className="w-10 h-10 object-contain" />
                <p className="text-[16px] md:text-[18px] font-bold text-primary-text">
                  NDIS-registered provider
                </p>
              </div>
            </div>

            {/* Column  */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-normal lg:text-normal-desktop text-slate-600 hover:text-primary transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column  */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-primary-text-dark uppercase tracking-wider">Information</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                    <Phone size={18} />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-primary-text font-medium">
                    +61 421 479 422
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-primary-text font-medium">
                    304 The Broadway Ellenbrook WA 6069
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                    <Mail size={18} />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-primary-text font-medium break-all">
                    info@royaleagles.com.au
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Small Text */}
            <p className="text-small lg:text-small-desktop text-primary-text-dark font-medium">
              © {currentYear} Royal Eagles. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: FaTiktok, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx}
                  href={href} 
                  className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-md"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;