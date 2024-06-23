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
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'media.dev.to',
      },
      {
        hostname: 'maalik.dev',
      },
      {
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default nextConfig;
