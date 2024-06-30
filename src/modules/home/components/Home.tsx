import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import Services from './Services';
import Skills from '@/modules/about/components/Skills';

const Home = () => {
  return (
    <>
      <Introduction />

      <Breakline className='mt-8 mb-6' />
      <Skills />
      <Breakline className='mt-8 mb-6' />
      <Services />
    </>
  );
};

export default Home;
