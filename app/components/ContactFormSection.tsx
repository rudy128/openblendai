'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const ContactFormSection = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          privacy: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 border border-gray-200">
          
          {/* Left: Form */}
          <div className="lg:w-1/2 w-full space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{t('title')}</h2>
            
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-2">{t('name')} *</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                  placeholder={t('placeholders.name')}
                />
              </div>

              {/* Email and Phone (Side-by-Side on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-2">{t('email')} *</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                    placeholder={t('placeholders.email')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-600 mb-2">{t('phone')}</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none placeholder-gray-500" 
                    placeholder={t('placeholders.phone')}
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="project" className="block text-lg font-medium text-gray-600 mb-2">{t('project')} *</label>
                <textarea 
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={3} 
                  required 
                  className="w-full bg-transparent border-b border-gray-300 text-gray-900 focus:border-[#4f46e5] focus:ring-0 p-2 outline-none resize-none placeholder-gray-500" 
                  placeholder={t('placeholders.project')}
                ></textarea>
              </div>

              {/* Checkbox and Send Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4">
                <div className="flex items-center mb-4 sm:mb-0">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#4f46e5] bg-transparent border-gray-300 rounded focus:ring-[#4f46e5] focus:ring-2"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    {t('privacy')}
                  </label>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5c6674] text-white font-semibold py-3 px-12 rounded-xl transition duration-150 hover:bg-[#6f7c8f] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : t('send')}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Phone Mockup (Video Call Style) */}
          <div className="lg:w-1/2 w-full hidden lg:flex justify-center lg:justify-end relative h-[450px]">
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
