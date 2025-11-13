'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:-my-40 flex flex-col lg:flex-row items-center"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Development of <span className="text-[#4F46E5]">crypto wallets</span> and exchangers <span className="text-[#4F46E5]">turnkey</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-lg mx-auto lg:mx-0">
            Let&apos;s turn your idea into a product and bring the first customers
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-4">
            <Link 
              href="#contact" 
              className="bg-linear-to-r from-[#4F46E5] to-[#6366F1] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] hover:-translate-y-1 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
            >
              Submit your application
            </Link>
            <Link 
              href="#contact" 
              className="text-[#E5E7EB] hover:text-[#4F46E5] font-semibold py-3 px-8 transition flex items-center justify-center group"
            >
              Plan an online meeting 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image/Mockup */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 lg:flex justify-center relative hidden">
          {/* Hero Image */}
          <div className="relative">
            <Image 
              src="/Gemini_Generated_Image_ak022pak022pak02-removebg-preview.png"
              alt="Axiomica Crypto Development"
              width={700}
              height={800}
              className="w-auto h-[700px] object-contain drop-shadow-2xl scale-x-[-1]"
              priority
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
