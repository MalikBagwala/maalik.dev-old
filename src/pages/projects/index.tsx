import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Projects from '@/modules/projects';
import contentfulClient from '@/services/contentful';
import { ContentType, ContentTypeFieldType, EntryFieldTypes } from 'contentful';

export type ProjectSkeleton = {
  contentTypeId: 'projects';
  fields: {
    slug: EntryFieldTypes.Text;
    body: any;
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
  });
  return {
    props: {
      title: contentType.name,
      subtitle: contentType.description,
      response: projects,
    },
  };
};
