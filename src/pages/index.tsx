import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/components/atoms/Container';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
};

export default HomePage;
