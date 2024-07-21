import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '@/components/atoms/SectionHeading';
import SectionSubHeading from '@/components/atoms/SectionSubHeading';
import { EDUCATION } from '@/constant/education';

import EducationCard from './EducationCard';

const EducationList = () => {
  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading
          title='Education'
          icon={<EducationIcon size={22} className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>My educational journey.</p>
        </SectionSubHeading>
      </div>

      <div className='grid md:grid-cols-1 gap-4'>
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
