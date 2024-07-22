import withBundleAnalyzer from '@next/bundle-analyzer';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'maalik.dev',
      },
      {
        hostname: '*.ctfassets.net',
      },
    ],
  },
};

const configWithBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
export default configWithBundleAnalyzer;
