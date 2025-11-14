'use client';

import React from 'react';
import { Service } from '@/types/sanity';

interface ServiceRowProps {
  service: Service;
}

const iconMap: { [key: string]: React.ReactElement } = {
  gear: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  key: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  graph: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  cube: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

export default function ServiceRow({ service }: ServiceRowProps) {
  const icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : iconMap['gear'];

  return (
    <div 
      className="rounded-lg p-6 flex flex-col md:flex-row md:items-center gap-6 border border-gray-800"
      style={{ background: 'rgba(22, 27, 34, 0.6)' }}
    >
      {/* Icon */}
      <div className="text-white shrink-0">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="grow">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-white font-bold text-lg">{service.title}</h3>
          {service.hasTag && service.tagText && (
            <span className="bg-[#4F46E5] text-white text-xs px-3 py-1 rounded-full">
              {service.tagText}
            </span>
          )}
        </div>
        {service.description && (
          <p className="text-[#9CA3AF] text-sm">{service.description}</p>
        )}
      </div>

      {/* Price and Duration */}
      <div className="flex flex-col items-end shrink-0">
        {service.priceString && (
          <p className="text-white font-bold text-xl">{service.priceString}</p>
        )}
        {service.durationString && (
          <p className="text-[#9CA3AF] text-sm">{service.durationString}</p>
        )}
      </div>

      {/* Order Button */}
      <button 
        className="px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 shrink-0"
        style={{ 
          background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
          boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
        }}
      >
        Order
      </button>
    </div>
  );
}
