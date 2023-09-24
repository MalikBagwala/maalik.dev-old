import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Resume from './Resume';
import Story from './Story';

const About = () => {
  return (
    <>
      <Story />
      <Resume />
      <Breakline className='my-8' />
      <CareerList />
    </>
  );
};

export default About;
