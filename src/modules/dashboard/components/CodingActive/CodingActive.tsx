import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SiWakatime as WakatimeIcon } from 'react-icons/si';
import useSWR from 'swr';

import SectionHeading from '@/components/atoms/SectionHeading';
import SectionSubHeading from '@/components/atoms/SectionSubHeading';

import CodingActiveList from './CodingActiveList';
import Overview from './Overview';
dayjs.extend(relativeTime);
interface CodingActiveProps {
  lastUpdate?: string;
}

const CodingActive = ({ lastUpdate }: CodingActiveProps) => {
  const { data } = useSWR('/api/wakatime');
  const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const formatLastUpdate = (): void => {
      const lastUpdateDate = lastUpdate || data?.last_update;
      if (lastUpdateDate) {
        setFormattedLastUpdate(dayjs(lastUpdateDate).fromNow());
      }
    };

    formatLastUpdate();
  }, [lastUpdate, data]);

  const renderLastUpdate = () => {
    return <span>{formattedLastUpdate || 'Never'}</span>;
  };

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='Monthly Statistics'
        icon={<WakatimeIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <div className='dark:text-neutral-400 md:flex-row md:items-center'>
          <span>My </span>
          <Link
            href='https://wakatime.com/@MalikBagwala'
            className='hover:text-neutral-900 hover:underline dark:hover:text-neutral-100'
          >
            WakaTime
          </Link>
          <span> last 30 day stats.</span>
        </div>
        <div className='text-sm text-neutral-600 dark:text-neutral-500'>
          Last update: {renderLastUpdate()}
        </div>
      </SectionSubHeading>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
