'use client';

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 md:px-12 lg:px-[48px]">
        <div className="section-content flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="rounded-full flex items-center justify-center overflow-hidden bg-white shadow-sm transition-transform hover:scale-105">
              <img 
                src="/logo.webp" 
                alt="Royal Eagles Logo" 
                className="w-20 h-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative text-normal-desktop font-bold transition-all duration-200 py-2
                    ${isActive ? 'text-primary' : 'text-slate-900 hover:text-primary'}
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                    after:bg-primary after:transition-transform after:duration-300
                    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className={`
                flex items-center gap-2 px-8 py-3 rounded-full font-bold text-normal-desktop transition-all shadow-md active:scale-95
                ${pathname === '/contact' 
                  ? 'bg-primary-dark text-white ring-2 ring-primary ring-offset-2' 
                  : 'bg-primary hover:bg-primary-dark text-white'}
              `}
            >
              <Phone size={18} />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 md:px-12 py-8 space-y-4 bg-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-3 text-xl font-bold border-b border-gray-50 last:border-0 transition-colors
                  ${isActive ? 'text-primary' : 'text-slate-900'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 lg:hidden">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className={`
                w-full px-6 py-4 rounded-full flex items-center justify-center gap-2 font-bold text-lg transition-colors
                ${pathname === '/contact' ? 'bg-primary-dark text-white' : 'bg-primary text-white'}
              `}
            >
              <Phone size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;