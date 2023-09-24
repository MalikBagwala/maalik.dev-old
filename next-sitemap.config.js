module.exports = {
  siteUrl: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://maalik.dev',
  generateRobotsTxt: true,
};
