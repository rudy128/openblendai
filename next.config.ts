import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  /* config options here */
  images: {
    domains: ['axiomica.io'],
  }
};

export default withNextIntl(nextConfig);
