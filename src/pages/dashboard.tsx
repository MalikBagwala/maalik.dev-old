import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';
import { baseUrl } from '@/common/constant/baseUrl';
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
      <NextSeo title={`${PAGE_TITLE} - Malik Bagwala`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </SWRConfig>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps = async () => {
  // const readStats = await await fetch(`${baseUrl}/api/wakatime`).then((data) =>
  //   data.json(),
  // );
  const contributionsCalendar = await fetch(
    `${baseUrl}/api/contributions`,
  ).then((data) => data.json());
  return {
    props: {
      fallback: {
        // '/api/wakatime': readStats,
        '/api/contributions': contributionsCalendar,
      },
    },
    revalidate: 300,
  };
};
