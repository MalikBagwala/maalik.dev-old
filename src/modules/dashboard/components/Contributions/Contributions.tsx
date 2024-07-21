import Link from 'next/link';
import useSWR from 'swr';

import SectionHeading from '@/components/atoms/SectionHeading';
import SectionSubHeading from '@/components/atoms/SectionSubHeading';

import { SiGit, SiGithub, SiGitlab } from 'react-icons/si';
import Calendar from './Calendar';
import Overview from './Overview';

type ContributionsProps = {};

const username = 'MalikBagwala';
const Contributions = ({}: ContributionsProps) => {
  const { data } = useSWR('/api/contributions');
  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading title='Contributions' icon={<SiGit className='mr-1' />} />
      <SectionSubHeading>
        <p className='dark:text-neutral-400'>
          My contributions from last year on GitHub and GitLab combined.
        </p>
        <span className='flex gap-4'>
          <Link
            href={`https://github.com/${username}`}
            target='_blank'
            passHref
            className='flex items-center gap-1 text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400'
          >
            <SiGithub /> @{username}
          </Link>
          <Link
            href={`https://gitlab.com/${username}`}
            target='_blank'
            passHref
            className='flex items-center gap-1 text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400'
          >
            <SiGitlab /> @{username}
          </Link>
        </span>
      </SectionSubHeading>

      {!data && <div className='dark:text-neutral-400'>No Data</div>}

      {data && (
        <div className='space-y-3'>
          <Overview data={data} />
          <Calendar data={data} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
