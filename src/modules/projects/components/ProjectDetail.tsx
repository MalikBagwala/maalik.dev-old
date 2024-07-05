import CustomImage from '@/common/components/elements/CustomImage';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

import getAssetUrl from '@/utils/getAssetUrl';
import ProjectLink from './ProjectLink';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET](node) {
      const type = node?.data?.target?.fields?.file?.contentType;
      const fileUrl = getAssetUrl(node?.data.target);
      const alt = node?.data?.target?.fields?.title;
      if (type.startsWith('image'))
        return <CustomImage height={400} width={800} alt={alt} src={fileUrl} />;
      else if (type.startsWith('video')) {
        return (
          <video controls>
            <source src={fileUrl} type={type} />
          </video>
        );
      }
    },
    [BLOCKS.HEADING_1](_, children) {
      return <h1>{children}</h1>;
    },
    [BLOCKS.HEADING_2](_, children) {
      return <h2 className='text-2xl'>{children}</h2>;
    },
    [BLOCKS.HEADING_3](_, children) {
      return <h3 className='text-xl font-medium'>{children}</h3>;
    },
    [BLOCKS.PARAGRAPH](_, children) {
      return <p className='text-gray-700 dark:text-gray-300'>{children}</p>;
    },
  },
};
const ProjectDetail = ({ project }: ProjectItemProps) => {
  const { title, source, live, stack, body, cover } = project.fields;
  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row items-baseline lg:items-center sm:flex-row gap-6 justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-[15px] text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-baseline gap-3'>
            {stack?.map((stack: any, index: number) => {
              const stackName = stack.fields?.name?.toLowerCase();
              return (
                <Tooltip key={stackName} title={stackName}>
                  {STACKS[stackName]}
                </Tooltip>
              );
            })}
          </div>
        </div>
        <ProjectLink title={title} linkDemo={live} linkSourceCode={source} />
      </div>
      {cover ? (
        <CustomImage
          src={getAssetUrl(cover)}
          width={800}
          height={400}
          alt={title}
          className='hover:scale-105'
        />
      ) : null}
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default ProjectDetail;
