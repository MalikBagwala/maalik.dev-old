import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-6' />
      <Services />
    </>
  );
};

export default Home;
