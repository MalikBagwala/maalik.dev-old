import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import loadMdxFiles from '@/common/libs/mdx';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
  data: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Showcasing my passion for technology, design, and problem-solving through code.';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Malik Bagwala`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects projects={projects} />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const projectList = loadMdxFiles(['projects']);

  return {
    props: {
      projects: projectList,
    },
  };
};
