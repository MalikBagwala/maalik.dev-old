import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';
import { fetchGitlabData, getGithubUser } from '@/services/github';
import { getReadStats } from '@/services/wakatime';

interface DashboardPageProps {
  fallback: any;
}

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
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
  const readStats = await getReadStats();
  const githubUserPersonal = await getGithubUser('personal');
  const gitlabData = await fetchGitlabData('MalikBagwala');
  return {
    props: {
      fallback: {
        '/api/read-stats': readStats.data,
        '/api/github?type=personal': githubUserPersonal?.data,
        GITLAB_USER_ENDPOINT: gitlabData,
      },
    },
    revalidate: 1,
  };
};
