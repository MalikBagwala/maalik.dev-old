import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/components/atoms/Container';
import PageHeading from '@/components/atoms/PageHeading';
import About from '@/modules/about';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = 'A short story of me';

const AboutPage: NextPage = () => {
  return (
    <>
      <Container data-aos='fade-left'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
