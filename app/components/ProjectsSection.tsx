'use client';
import React, { useRef } from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="bg-[#0D1117] w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E5E7EB]">Projects created by us</h2>
          <Link 
            href="#" 
            className="bg-linear-to-r from-[#4F46E5] to-[#6366F1] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] hover:-translate-y-1 text-white font-semibold py-3 px-8 rounded-xl mt-4 md:mt-0 shadow-lg transition-all duration-300"
          >
            See all cases
          </Link>
        </div>

        {/* Project Filters */}
        <div className="flex space-x-3 mb-12 overflow-x-auto pb-2">
          <button className="font-medium px-4 py-2 rounded-lg bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/50 whitespace-nowrap">
            All
          </button>
          <button className="text-[#9CA3AF] font-medium px-4 py-2 rounded-lg bg-[#161B22] border border-gray-700 hover:bg-gray-700/50 transition whitespace-nowrap">
            WebApp
          </button>
          <button className="text-[#E5E7EB] font-medium px-4 py-2 rounded-lg bg-[#4F46E5] border border-[#4F46E5]/50 whitespace-nowrap">
            Cryptocurrency exchange
          </button>
          <button className="text-[#9CA3AF] font-medium px-4 py-2 rounded-lg bg-[#161B22] border border-gray-700 hover:bg-gray-700/50 transition whitespace-nowrap">
            Smart contract
          </button>
          <button className="text-[#9CA3AF] font-medium px-4 py-2 rounded-lg bg-[#161B22] border border-gray-700 hover:bg-gray-700/50 transition whitespace-nowrap">
            GameFi
          </button>
          <button className="text-[#9CA3AF] font-medium px-4 py-2 rounded-lg bg-[#161B22] border border-gray-700 hover:bg-gray-700/50 transition whitespace-nowrap">
            NFT
          </button>
        </div>

        {/* Project Cards Slider */}
        <div className="relative">
          {/* Projects Track */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Project Card 1: BuySell */}
            <div className="snap-center bg-[#161B22] rounded-2xl overflow-hidden border border-gray-800 p-6 shrink-0 w-80 md:w-[360px] min-w-[280px] group hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(2,6,23,0.6),0_8px_30px_rgba(79,70,229,0.08)] hover:border-[rgba(79,70,229,0.16)] transition-all duration-350 ease-[cubic-bezier(0.2,0.9,0.3,1)]"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 8px 30px rgba(2,6,23,0.6), 0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              <div className="h-[250px] bg-[#21262D] rounded-xl mb-4 relative flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="96" 
                  height="96" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-[#9CA3AF]/50"
                >
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>
              <span className="text-sm font-medium text-[#9CA3AF]">Cryptocurrency exchange</span>
              <h3 className="text-2xl font-bold text-[#E5E7EB] my-2">BuySell</h3>
              <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                We developed BuySell center - a crypto exchange platform supporting popular assets and bank transfers. The service features a user-friendly interface, automated swaps, and both fixed and floating rates.
              </p>
              <Link 
                href="#" 
                className="text-[#4F46E5] text-sm font-medium flex items-center hover:underline group"
              >
                Learn More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>

            {/* Project Card 2: Bitberry */}
            <div className="snap-center bg-[#161B22] rounded-2xl overflow-hidden border border-gray-800 p-6 shrink-0 w-80 md:w-[360px] min-w-[280px] group hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(2,6,23,0.6),0_8px_30px_rgba(79,70,229,0.08)] hover:border-[rgba(79,70,229,0.16)] transition-all duration-350 ease-[cubic-bezier(0.2,0.9,0.3,1)]"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 8px 30px rgba(2,6,23,0.6), 0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              <div className="h-[250px] bg-[#21262D] rounded-xl mb-4 relative flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="96" 
                  height="96" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-[#9CA3AF]/50"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="text-sm font-medium text-[#9CA3AF]">Cryptocurrency exchange</span>
              <h3 className="text-2xl font-bold text-[#E5E7EB] my-2">Cryptocurrency exchange service Bitberry</h3>
              <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                Bitberry/Cash offers users a simple and fast way to exchange cryptocurrencies with guaranteed security and transaction transparency.
              </p>
              <Link 
                href="#" 
                className="text-[#4F46E5] text-sm font-medium flex items-center hover:underline group"
              >
                Learn More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>

            {/* Project Card 3: Artex */}
            <div className="snap-center bg-[#161B22] rounded-2xl overflow-hidden border border-gray-800 p-6 shrink-0 w-80 md:w-[360px] min-w-[280px] group hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(2,6,23,0.6),0_8px_30px_rgba(79,70,229,0.08)] hover:border-[rgba(79,70,229,0.16)] transition-all duration-350 ease-[cubic-bezier(0.2,0.9,0.3,1)]"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 8px 30px rgba(2,6,23,0.6), 0 2px 8px rgba(0,0,0,0.6)'
              }}
            >
              <div className="h-[250px] bg-[#21262D] rounded-xl mb-4 relative flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="96" 
                  height="96" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-[#9CA3AF]/50"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <span className="text-sm font-medium text-[#9CA3AF]">Cryptocurrency exchange</span>
              <h3 className="text-2xl font-bold text-[#E5E7EB] my-2">Cryptocurrency Exchange Platform Artex</h3>
              <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                Buying/selling cryptocurrency online, receiving and issuing cash in fiat currency. Automated module, personal account, referral program, Telegram bot notifications.
              </p>
              <Link 
                href="#" 
                className="text-[#4F46E5] text-sm font-medium flex items-center hover:underline group"
              >
                Learn More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute top-1/2 -left-[22px] transform -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(6,6,10,0.6)] border border-[rgba(255,255,255,0.04)] text-[#e6edf3] hidden md:flex items-center justify-center z-30 cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-[rgba(79,70,229,0.12)]"
            style={{
              backdropFilter: 'blur(6px)'
            }}
          >
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
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute top-1/2 -right-[22px] transform -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(6,6,10,0.6)] border border-[rgba(255,255,255,0.04)] text-[#e6edf3] hidden md:flex items-center justify-center z-30 cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-[rgba(79,70,229,0.12)]"
            style={{
              backdropFilter: 'blur(6px)'
            }}
          >
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
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
