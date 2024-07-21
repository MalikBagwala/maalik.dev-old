import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/components/elements/BackButton';
import Container from '@/components/elements/Container';
import PageHeading from '@/components/elements/PageHeading';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';
import contentfulClient from '@/services/contentful';
import { ProjectSkeleton } from '.';

type ProjectsDetailPageProps = any;

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const { title, description, slug, thumbnail } = project.fields;
  const { createdAt, updatedAt } = project.sys;
  const PAGE_TITLE = title;
  const PAGE_DESCRIPTION = description;

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
            publishedTime: createdAt,
            modifiedTime: updatedAt,
            authors: ['Malik Bagwala'],
          },
          url: canonicalUrl,
          images: [
            {
              url: `https://${thumbnail?.fields?.file?.url}`,
            },
          ],
          siteName: 'Malik Bagwala | Projects',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail project={project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const CONTENT_TYPE_ID = 'projects';
  const projects = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: CONTENT_TYPE_ID,
  });

  const paths = projects.items.map((project) => ({
    params: { slug: project.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const CONTENT_TYPE_ID = 'projects';
  const projects = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: CONTENT_TYPE_ID,
    'fields.slug[match]': slug,
  });

  const project = projects?.items?.[0];

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
