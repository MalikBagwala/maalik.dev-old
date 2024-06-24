import Image from '@/common/components/elements/Image';
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
      return (
        <Image
          height={400}
          width={800}
          alt={node?.data?.target?.fields?.title}
          src={getAssetUrl(node?.data.target)}
        />
      );
    },
  },
};
const ProjectDetail = ({ project }: ProjectItemProps) => {
  const { title, source, live, stack, body, cover } = project.fields;
  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row items-baseline lg:items-center sm:flex-row gap-6 justify-between'>
        <div className='flex items-center flex-wrap gap-2 w-[150%]'>
          <span className='text-[15px] mb-1 text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3 w-full'>
            {stack?.map((stack: any, index: number) => {
              const stackName = stack.fields?.name?.toLowerCase();
              return (
                <div key={index}>
                  <Tooltip title={stackName}>{STACKS[stackName]}</Tooltip>
                </div>
              );
            })}
          </div>
        </div>
        <ProjectLink title={title} linkDemo={live} linkSourceCode={source} />
      </div>
      {cover ? (
        <Image
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
