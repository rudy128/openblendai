'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const MissionSection = () => {
  const t = useTranslations('mission');

  return (
    <section id="mission" className="w-full py-20 bg-white text-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 lg:space-x-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1220] leading-snug">
            {t('title')}
          </h2>
          <p className="text-xl text-[#6b7280] max-w-lg mx-auto lg:mx-0">
            {t('description')}
          </p>
        </div>

        {/* Right Visual - Mission Video */}
        <div className="lg:w-1/2 relative h-96 overflow-hidden rounded-xl bg-white">
          <video
            className="absolute inset-0 w-full h-full object-cover bg-white"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src="/mission_new.mp4"
            onTimeUpdate={(e) => {
              const video = e.target as HTMLVideoElement;
              // Seamless loop - restart slightly before the end to avoid blackout
              if (video.currentTime >= video.duration - 0.1) {
                video.currentTime = 0;
              }
            }}
            onEnded={(e) => {
              // Immediate restart on end to prevent blackout
              const video = e.target as HTMLVideoElement;
              video.currentTime = 0;
              video.play();
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
