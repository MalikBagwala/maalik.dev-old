import Breakline from '@/components/atoms/Breakline';

import CodingActive from './CodingActive';
import Contributions from './Contributions';

const Dashboard = () => {
  return (
    <>
      <CodingActive />
      <Breakline className='mt-10 mb-8' />
      <div className='space-y-10'>
        <Contributions />
      </div>
    </>
  );
};

export default Dashboard;
