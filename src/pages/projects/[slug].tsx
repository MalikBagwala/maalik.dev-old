import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import loadMdxFiles from '@/common/libs/mdx';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({
  project: { slug, frontMatter, content },
}) => {
  const PAGE_TITLE = frontMatter.title;
  const PAGE_DESCRIPTION = frontMatter?.description;

  const canonicalUrl = `https://maalik.dev/project/${slug}`;

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} - Project Malik Bagwala`}
        description={PAGE_DESCRIPTION}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            // publishedTime: project?.updated_at.toString(),
            // modifiedTime: project?.updated_at.toString(),
            authors: ['Malik Bagwala'],
          },
          url: canonicalUrl,
          images: [
            {
              url: frontMatter?.image,
            },
          ],
          siteName: 'Malik Bagwala | Projects',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail
          slug={slug}
          content={content}
          frontMatter={frontMatter}
        />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = loadMdxFiles(['projects']);

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const projects = loadMdxFiles(['projects']);
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
  };
};
