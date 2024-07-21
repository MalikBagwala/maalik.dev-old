import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/components/elements/Container';
import PageHeading from '@/components/elements/PageHeading';
import Projects from '@/modules/projects';
import contentfulClient from '@/services/contentful';
import { EntryFieldTypes } from 'contentful';

export type ProjectSkeleton = {
  contentTypeId: 'projects';
  fields: {
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
  };
};
type ProjectsPageProps = {
  title: string;
  subtitle: string;
  response: any;
};
const ProjectsPage: NextPage<ProjectsPageProps> = ({
  title,
  subtitle,
  response,
}) => {
  return (
    <>
      <NextSeo title={`${title} - Malik Bagwala`} />
      <Container data-aos='fade-up'>
        <PageHeading title={title} description={subtitle} />
        <Projects projects={response.items} />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const CONTENT_TYPE_ID = 'projects';
  const contentType = await contentfulClient.getContentType(CONTENT_TYPE_ID);
  const projects = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: CONTENT_TYPE_ID,
    order: ['-fields.weight', 'fields.isFeatured', '-sys.updatedAt'] as any[],
  });
  return {
    props: {
      title: contentType.name,
      subtitle: contentType.description,
      response: projects,
    },
  };
};
