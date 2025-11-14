'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const FooterSection = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#0d1117] border-t border-[#2f3338] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Logo and Contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4f46e5]">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.49L19.26 8L12 11.51L4.74 8L12 4.49ZM12 19.51L4.74 16V9.49L12 13.01L19.26 9.49V16L12 19.51Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-extrabold text-[#e5e7eb] tracking-wide">AXIOMICA</span>
            </div>
            <div className="flex space-x-3 text-lg">
              <a href="#" className="text-[#9ca3af] hover:text-[#4f46e5] transition">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-[#9ca3af] hover:text-[#4f46e5] transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <a href="mailto:hello@axiomica.io" className="text-[#4f46e5] hover:underline text-sm font-medium">
              hello@axiomica.io
            </a>
          </div>
          
          {/* Col 2: Development */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#e5e7eb] mb-4">{t('development')}</h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.tokensBlockchain')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.blockchainWallets')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.smartContracts')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.telegramMiniApps')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.blockchainExchangesP2P')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.paymentSystems')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('developmentLinks.blockchainProjects')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Col 3: Promotion */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#e5e7eb] mb-4">{t('promotion')}</h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('promotionLinks.cryptoExchanges')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('promotionLinks.coinmarketcap')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#e5e7eb] mb-4">{t('resources')}</h4>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('resourcesLinks.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4f46e5] transition">
                  {t('resourcesLinks.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Address (Shifted to the right on desktop, matching screenshot layout) */}
          <div className="space-y-3 col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold text-[#e5e7eb] mb-4">{t('address')}</h4>
            <p className="text-sm text-[#9ca3af]">
              {t('addressText')}
            </p>
          </div>

        </div>

        {/* Copyright and Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-[#2f3338] text-xs text-[#9ca3af]">
          <p>{t('copyright')}</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#4f46e5] transition">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="hover:text-[#4f46e5] transition">
              {t('cookiePolicy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
