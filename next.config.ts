import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
  }
};

export default withNextIntl(nextConfig);
