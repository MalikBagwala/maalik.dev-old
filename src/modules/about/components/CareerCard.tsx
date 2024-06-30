import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import CustomImage from '@/common/components/elements/Image';
import { durationBetweenDates, formatDate } from '@/common/helpers';
import { CareerProps } from '@/common/types/careers';
dayjs.extend(duration);
const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}: CareerProps) => {
  return (
    <Card className='flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800'>
      {logo ? (
        <CustomImage src={logo} width={55} height={55} alt={company} />
      ) : (
        <CompanyIcon size={30} />
      )}

      <div className='space-y-1'>
        <h6>{position}</h6>
        <div className='text-sm text-neutral-600 dark:text-neutral-400 space-y-2'>
          <div className='flex items-center gap-1 md:gap-2'>
            <a
              href={link || '#'}
              target='_blank'
              data-umami-event={`Click Career Company Name: ${company}`}
            >
              <span className='underline cursor-pointer hover:text-dark hover:dark:text-white'>
                {company}
              </span>
            </a>
            <span className='text-neutral-300 dark:text-neutral-700'>•</span>
            <span>{location}</span>
          </div>
          <div className='flex flex-col md:text-[13px]'>
            <div className='flex gap-1'>
              <span>{formatDate(start_date, 'MMM YYYY')}</span> -{' '}
              <span>
                {end_date ? formatDate(end_date, 'MMM YYYY') : 'Present'}
              </span>
            </div>
            <span className='text-neutral-500 dark:text-neutral-500'>
              ~{' '}
              {durationBetweenDates(
                start_date,
                end_date ?? dayjs().toISOString(),
              )}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
