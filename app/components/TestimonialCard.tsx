'use client';

import Image from 'next/image';
import { Testimonial } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div 
      className="rounded-2xl p-6 flex flex-col h-full border border-gray-800"
      style={{ background: 'rgba(22, 27, 34, 0.8)' }}
    >
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        {testimonial.avatar && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src={urlFor(testimonial.avatar).width(100).height(100).url()}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-[#9CA3AF] text-sm">{testimonial.title}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-white text-sm leading-relaxed mb-6 grow">
        {testimonial.quote}
      </p>

      {/* Company Logo */}
      {testimonial.companyLogo && (
        <div className="relative h-8 w-24 grayscale opacity-60">
          <Image
            src={urlFor(testimonial.companyLogo).width(200).height(80).url()}
            alt="Company logo"
            fill
            className="object-contain object-left"
          />
        </div>
      )}
    </div>
  );
}
