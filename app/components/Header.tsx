'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-40 backdrop-blur-sm shadow-md border-b border-gray-800"
      style={{ 
        background: 'linear-gradient(180deg, rgba(0, 8, 16, 0.95) 0%, rgba(1, 5, 9, 0.95) 100%)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Axiomica Logo SVG - More Colorful */}
          <div className="relative">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-[#6366F1]"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))',
              }}
            >
              <path 
                d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.49L19.26 8L12 11.51L4.74 8L12 4.49ZM12 19.51L4.74 16V9.49L12 13.01L19.26 9.49V16L12 19.51Z" 
                fill="url(#logoGradient)"
              />
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span 
            className="text-xl font-extrabold tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
            }}
          >
            AXIOMICA
          </span>
          {/* <Link 
            href="#" 
            className="ml-4 text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
            }}
          >
            Ru
          </Link> */}
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#E5E7EB]">
          <Link 
            href="#services" 
            className="hover:text-[#4F46E5] transition"
          >
            Development
          </Link>
          <Link 
            href="#" 
            className="hover:text-[#4F46E5] transition"
          >
            Promotion
          </Link>
          <Link 
            href="#projects" 
            className="hover:text-[#4F46E5] transition"
          >
            Cases
          </Link>
          <Link 
            href="#" 
            className="hover:text-[#4F46E5] transition"
          >
            Blog
          </Link>
          <Link 
            href="#" 
            className="hover:text-[#4F46E5] transition"
          >
            Partner program
          </Link>
          <Link 
            href="#mission" 
            className="hover:text-[#4F46E5] transition"
          >
            About us
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-[#4F46E5] transition"
          >
            Contacts
          </Link>
        </div>

        {/* Social Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link 
            href="#" 
            className="text-[#E5E7EB] hover:text-[#4F46E5] transition"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube text-lg"></i>
          </Link>
          <Link 
            href="#" 
            className="text-[#E5E7EB] hover:text-[#4F46E5] transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </Link>
          
          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="lg:hidden text-[#E5E7EB] hover:text-[#4F46E5] transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Optional - expandable) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#161B22] border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="#services" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Development
            </Link>
            <Link 
              href="#" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Promotion
            </Link>
            <Link 
              href="#projects" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cases
            </Link>
            <Link 
              href="#" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="#" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partner program
            </Link>
            <Link 
              href="#mission" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="#contact" 
              className="block text-sm font-medium text-[#E5E7EB] hover:text-[#4F46E5] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
