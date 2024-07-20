import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';
import Card from '@/common/components/elements/Card';
import CustomImage from '@/common/components/elements/CustomImage';
import { durationBetweenDates, formatDate } from '@/common/helpers';
import { CareerProps } from '@/common/types/careers';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
dayjs.extend(duration);
const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  company_legal_name,
  type,
  location_type,
  responsibilities,
  link,
}: CareerProps) => {
  const [isShowResponsibility, setIsShowResponsibility] =
    useState<boolean>(false);
  return (
    <Card className='flex gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      <div className='mt-1.5 w-fit'>
        {logo ? (
          <CustomImage
            src={logo}
            width={55}
            height={55}
            alt={company}
            className='h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent'
          />
        ) : (
          <CompanyIcon size={50} />
        )}
      </div>
      <div className='w-4/5 space-y-3'>
        <div className='space-y-1'>
          <h6>{position}</h6>
          <div className='space-y-1 text-sm text-neutral-600 dark:text-neutral-400'>
            <div className='flex flex-col gap-1 md:flex-row md:items-center md:gap-2'>
              <a
                href={link || '#'}
                target='_blank'
                data-umami-event={`Click Career Company Name: ${company}`}
              >
                <span className='cursor-pointer underline-offset-2 hover:text-dark hover:underline hover:dark:text-white'>
                  {company}
                </span>
              </a>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span className='text-neutral-500'>[ {company_legal_name} ]</span>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span>{location}</span>
            </div>
            <div className='flex flex-col gap-2 md:flex-row md:text-[13px]'>
              <div className='flex gap-1'>
                <span>
                  {formatDate(start_date, 'MMM YYYY')} -{' '}
                  {end_date ? formatDate(end_date, 'MMM YYYY') : 'Present'}
                </span>
              </div>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span className='text-neutral-500 dark:text-neutral-500'>
                {durationBetweenDates(
                  start_date,
                  end_date ?? dayjs().toISOString(),
                )}
              </span>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span>{type}</span>
              <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
                •
              </span>
              <span>{location_type}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsShowResponsibility(!isShowResponsibility)}
          className='-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500'
        >
          <HiChevronRight
            size={18}
            className={clsx({
              'rotate-90 transition-all duration-300': isShowResponsibility,
            })}
          />
          {isShowResponsibility ? 'Hide' : 'Show'} Responsibilities
        </button>
        <AnimatePresence>
          {isShowResponsibility && (
            <motion.ul
              className='ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {responsibilities?.map((item) => (
                <motion.li key={item} layout>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default CareerCard;
