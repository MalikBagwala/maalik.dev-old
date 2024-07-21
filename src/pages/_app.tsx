import AOS from 'aos';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import '@/styles/globals.css';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

import Layout from '@/components/layouts';
import SEO from '@/utils/seo';

const ProgressBar = dynamic(() => import('../components/atoms/ProgressBar'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
