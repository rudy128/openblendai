'use client';
import React from 'react';
import Link from 'next/link';
import servicesData from '../../messages/services.json';

// Icon mapping for different service types
const iconMap = {
  crypto: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>
  ),
  mobile: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  wallet: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  ),
  exchange: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7 10h10"></path>
      <path d="M7 14h10"></path>
      <path d="M12 6v12"></path>
      <path d="M6 6h12v12H6z"></path>
    </svg>
  ),
  payment: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  ),
  contract: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14,2 14,8 20,8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10,9 9,9 8,9"></polyline>
    </svg>
  )
};

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 bg-white text-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#0b1220]">
          {servicesData.title}
        </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Primary Service and Listing */}
        <div className="space-y-12">
          <div className="flex items-center space-x-4">
            {/* Icon has a circular colored background */}
            <div className="w-12 h-12 rounded-full bg-[#4F46E5]/20 flex items-center justify-center text-[#4F46E5] text-xl">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="5,3 19,12 5,21 12,12"></polygon>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0b1220]">{servicesData.primaryService.title}</h3>
          </div>
          <p className="text-xl text-[#6b7280] ml-16 leading-relaxed">{servicesData.primaryService.description}</p>
        </div>

        {/* Right Column: Specific Services List */}
        <div className="border border-[#e6e9ef] rounded-2xl overflow-hidden">
          {servicesData.services.map((service) => (
            <div 
              key={service.id}
              className="group p-6 flex items-start space-x-4 transition-colors duration-200 hover:bg-gray-50 border-b border-[#e6e9ef] last:border-b-0"
            >
              <div className="w-12 h-12 rounded-full bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] text-xl">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mr-2 ${
                  service.badge.type === 'hot' 
                    ? 'text-red-500 bg-red-500/10' 
                    : 'text-green-500 bg-green-500/10'
                }`}>
                  {service.badge.text}
                </span>
                <h4 className="text-lg font-bold text-[#0b1220]">{service.title}</h4>
                <Link 
                  href="#" 
                  className="text-[#4F46E5] text-sm font-medium mt-1 inline-flex items-center hover:underline group"
                >
                  {service.linkText}
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
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
