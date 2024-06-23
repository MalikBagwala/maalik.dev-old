const canonicalUrl = 'https://maalik.dev';
const metaImage = 'https://maalik.dev/og.jpg';
const metaDescription =
  'Seasoned software engineer with 5+ years of experience building enterprise applications across the stack, from scratch. React | Django | PostgreSQL | Kuberntes | TypeScript';

const defaultSEOConfig = {
  defaultTitle: 'Malik Bagwala - Full-Stack Engineer',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Malik Bagwala - Full-Stack Engineer',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'maalik.dev og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'maalik.dev og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'maalik.dev og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'maalik.dev',
  },
  twitter: {
    handle: 'MalikBagwala',
    site: 'https://maalik.dev',
    image: 'https://maalik.dev/og.png',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
