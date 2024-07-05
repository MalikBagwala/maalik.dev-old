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

export default nextConfig;
