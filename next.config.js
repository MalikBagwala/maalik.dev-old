const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'maalik.dev',
      'picsum.photos',
      'res.cloudinary.com',
      'media.dev.to',
    ],
  },
};

module.exports = nextConfig;
