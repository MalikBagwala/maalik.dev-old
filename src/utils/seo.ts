import { NextSeoProps } from 'next-seo';
const canonicalUrl = 'https://maalik.dev';
const metaImage = 'https://maalik.dev/og.jpg';
const metaDescription = `Malik is a highly skilled Senior Full-Stack Engineer (ex-CTO) with 5+ years of experience. He is proficient in React, TypeScript, Next.js, Python, PostgreSQL, and Kubernetes. Currently, he is exploring the world of LLMs and Neural Nets`;
const metaTitle =
  'Malik Bagwala | Senior Fullstack Engineer, ex-CTO with 5+ years of experience';

const SEO: NextSeoProps = {
  defaultTitle: metaTitle,
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    title: metaTitle,
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
    cardType: 'summary_large_image',
  },
};

export default SEO;
