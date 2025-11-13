'use client';
import React from 'react';

const ContactFormSection = () => {
  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 border border-gray-200">
          
          {/* Left: Form */}
          <div className="lg:w-1/2 w-full space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Let&apos;s discuss your project together</h2>
            
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                  placeholder="Enter your name"
                />
              </div>

              {/* Email and Phone (Side-by-Side on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-600 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="project" className="block text-lg font-medium text-gray-600 mb-2">Tell us about your project *</label>
                <textarea 
                  id="project" 
                  rows={3} 
                  required 
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none resize-none placeholder-gray-500" 
                  placeholder="Describe your project"
                ></textarea>
              </div>

              {/* Checkbox and Send Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4">
                <div className="flex items-center mb-4 sm:mb-0">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="w-4 h-4 text-[#4f46e5] bg-transparent border-gray-300 rounded focus:ring-[#4f46e5] focus:ring-2"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to the processing of personal data
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#5c6674] text-white font-semibold py-3 px-12 rounded-xl transition duration-150 hover:bg-[#6f7c8f]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right: Phone Mockup (Video Call Style) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative h-[450px]">
            <div className="w-72 h-[450px] bg-gray-900 rounded-[3rem] shadow-2xl relative border-8 border-gray-400 overflow-hidden mockup">
              <div className="flex flex-col h-full text-center p-4">
                <div className="text-sm text-gray-400 mt-4">AXIOMICA</div>
                <div className="text-2xl font-bold text-white my-2">15:00</div>
                <div className="grow flex items-center justify-center">
                  {/* Video Placeholder/Avatar */}
                  <div className="w-24 h-24 rounded-full bg-[#4f46e5]/30 flex items-center justify-center text-white text-lg font-bold border border-[#4f46e5]">A</div>
                </div>
                {/* End Call Button and controls */}
                <div className="flex justify-center space-x-6 mb-4">
                  <button className="flex flex-col items-center text-white text-xs space-y-1">
                    <i className="fas fa-volume-up text-2xl"></i>
                    <span>Speaker</span>
                  </button>
                  <button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-3xl text-white">
                    <i className="fas fa-phone"></i>
                  </button>
                  <button className="flex flex-col items-center text-white text-xs space-y-1">
                    <i className="fas fa-video text-2xl"></i>
                    <span>Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
