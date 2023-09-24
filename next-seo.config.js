const canonicalUrl = 'https://maalik.dev';
const metaImage = 'https://maalik.dev/og.jpg';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Malik Bagwala - UI Engineer',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Malik Bagwala - UI Engineer',
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
