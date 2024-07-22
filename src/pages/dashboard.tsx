import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import Container from '@/components/atoms/Container';
import PageHeading from '@/components/atoms/PageHeading';
import Dashboard from '@/modules/dashboard';
import { fetchContributions } from './api/contributions';
import { fetchWakatimeData } from './api/wakatime';
interface DashboardPageProps {
  fallback: any;
}

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
  return (
    <SWRConfig
      value={{
        fallback,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextSeo
        title={`Malik Bagwala | ${PAGE_TITLE}`}
        description={PAGE_DESCRIPTION}
      />
      <Container data-aos='fade-left'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </SWRConfig>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps = async () => {
  const readStats = await fetchWakatimeData();
  const contributionsCalendar = await fetchContributions();
  return {
    props: {
      fallback: {
        '/api/wakatime': readStats,
        '/api/contributions': contributionsCalendar,
      },
    },
    revalidate: 300,
  };
};
