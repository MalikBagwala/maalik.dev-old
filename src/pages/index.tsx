import { NextPage } from 'next';

import Container from '@/components/atoms/Container';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Container data-aos='fade-left'>
        <Home />
      </Container>
    </>
  );
};

export default HomePage;
