'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevelopmentDropdownOpen, setIsDevelopmentDropdownOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  
  // Get the current path without the locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '/';
  // Build the new path with the opposite locale
  const newLocale = locale === 'en' ? 'fr' : 'en';
  const switchLocalePath = `/${newLocale}${pathWithoutLocale}`;

  return (
    <header 
      className="sticky top-0 z-40 backdrop-blur-sm shadow-md border-b border-gray-800"
      style={{ 
        background: 'linear-gradient(180deg, rgba(0, 8, 16, 0.95) 0%, rgba(1, 5, 9, 0.95) 100%)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}/`} className="flex items-center">
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
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#E5E7EB]">
          {/* Development Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDevelopmentDropdownOpen(true)}
            onMouseLeave={() => setIsDevelopmentDropdownOpen(false)}
          >
            <button 
              className="hover:text-[#4F46E5] transition flex items-center space-x-1 py-2"
            >
              <span>{t('development')}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDevelopmentDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDevelopmentDropdownOpen && (
              <div 
                className="absolute top-full left-0 pt-2 w-56"
              >
                <div 
                  className="bg-[#1a1f2e] border border-gray-700 rounded-lg shadow-xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(26, 31, 46, 0.98) 0%, rgba(16, 20, 30, 0.98) 100%)',
                  }}
                >
                  <Link 
                    href={`/${locale}/development/blockchain-development`}
                    className="block px-4 py-3 text-sm text-[#E5E7EB] hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] transition"
                  >
                    Custom Blockchain
                  </Link>
                  {/* <Link 
                    href="#services"
                    className="block px-4 py-3 text-sm text-[#E5E7EB] hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] transition"
                  >
                    Web Development
                  </Link>
                  <Link 
                    href="#services"
                    className="block px-4 py-3 text-sm text-[#E5E7EB] hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] transition"
                  >
                    Mobile Development
                  </Link> */}
                </div>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/cases`}
            className="hover:text-[#4F46E5] transition"
          >
            {t('cases')}
          </Link>
          <Link 
            href={`/${locale}/blogs`}
            className="hover:text-[#4F46E5] transition"
          >
            {t('blog')}
          </Link>
          <Link 
            href={`/${locale}/about`}
            className="hover:text-[#4F46E5] transition"
          >
            {t('aboutUs')}
          </Link>
          <Link 
            href={`/${locale}/contact`}
            className="hover:text-[#4F46E5] transition"
          >
            {t('contacts')}
          </Link>
        </div>

        {/* Language Switcher, Social Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <Link 
            href={switchLocalePath}
            className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
            }}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </Link>
          
          {/* Social Icons - Hidden on mobile */}
          <Link 
            href="#" 
            className="hidden md:block text-[#E5E7EB] hover:text-[#4F46E5] transition"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube text-lg"></i>
          </Link>
          <Link 
            href="#" 
            className="hidden md:block text-[#E5E7EB] hover:text-[#4F46E5] transition"
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

      {/* Mobile Menu (Full Screen Overlay) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#000810]">
          {/* Header Bar with Close Button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))' }}
              >
                <path 
                  d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.49L19.26 8L12 11.51L4.74 8L12 4.49ZM12 19.51L4.74 16V9.49L12 13.01L19.26 9.49V16L12 19.51Z" 
                  fill="url(#logoGradientMobile)"
                />
                <defs>
                  <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <span 
                className="text-xl font-extrabold tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AXIOMICA
              </span>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#4F46E5] transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          {/* Menu Content - Centered */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]  bg-[#000810] px-6 space-y-6">
            {/* Development Submenu */}
            <div className="w-full max-w-xs">
              <button 
                className="w-full text-left text-lg font-bold text-white hover:text-[#4F46E5] transition py-3 flex items-center justify-between border-b border-gray-800"
                onClick={() => setIsDevelopmentDropdownOpen(!isDevelopmentDropdownOpen)}
              >
                <span>{t('development')}</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${isDevelopmentDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Development Dropdown Items */}
              {isDevelopmentDropdownOpen && (
                <div className="ml-4 mt-3 space-y-3">
                  <Link 
                    href={`/${locale}/development/blockchain-development`}
                    className="block text-base text-[#9CA3AF] hover:text-[#4F46E5] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Custom Blockchain
                  </Link>
                </div>
              )}
            </div>

            {/* Main Navigation Links */}
            <Link
              href={`/${locale}/cases`}
              className="w-full max-w-xs text-lg font-bold text-white hover:text-[#4F46E5] transition py-3 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('cases')}
            </Link>
            
            <Link 
              href={`/${locale}/blogs`}
              className="w-full max-w-xs text-lg font-bold text-white hover:text-[#4F46E5] transition py-3 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('blog')}
            </Link>
            
            <Link 
              href={`/${locale}/about`}
              className="w-full max-w-xs text-lg font-bold text-white hover:text-[#4F46E5] transition py-3 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('aboutUs')}
            </Link>
            
            <Link 
              href={`/${locale}/contact`}
              className="w-full max-w-xs text-lg font-bold text-white hover:text-[#4F46E5] transition py-3 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contacts')}
            </Link>
            
            {/* Language Switcher in Mobile Menu */}
            <Link 
              href={switchLocalePath}
              className="w-full max-w-xs text-center text-base font-bold px-6 py-4 rounded-full text-white transition-all transform hover:scale-105 mt-6"
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {locale === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}
            </Link>

            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center gap-6 mt-8">
              <Link 
                href="#" 
                className="text-white hover:text-[#4F46E5] transition"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-3xl"></i>
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#4F46E5] transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-3xl"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
