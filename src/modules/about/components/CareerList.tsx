import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';

import SectionHeading from '@/components/atoms/SectionHeading';
import SectionSubHeading from '@/components/atoms/SectionSubHeading';
import { CAREERS } from '@/constant/careers';

import CareerCard from './CareerCard';

const CareerList = () => {
  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='Career' icon={<CareerIcon className='mr-1' />} />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>
            My professional career journey.
          </p>
        </SectionSubHeading>
      </div>

      <div className='grid gap-3'>
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
