import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Resume from './Resume';
import Skills from './Skills';
import Story from './Story';

const About = () => {
  return (
    <>
      <Story />
      <Resume />
      <Breakline className='my-8' />
      <Skills />
      <Breakline className='my-8' />
      <CareerList />
    </>
  );
};

export default About;
