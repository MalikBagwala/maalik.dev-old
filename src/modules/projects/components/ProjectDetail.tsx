import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

import getAssetUrl from '@/utils/getAssetUrl';
import ProjectLink from './ProjectLink';

const ProjectDetail = ({ project }: ProjectItemProps) => {
  const { title, source, live, thumbnail, stack, body } = project.fields;
  console.log(body);
  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className='text-[15px] mb-1 text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stack?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink title={title} linkDemo={live} linkSourceCode={source} />
      </div>
      {thumbnail && (
        <Image
          src={getAssetUrl(thumbnail)}
          width={800}
          height={400}
          alt={title}
          className='hover:scale-105'
        />
      )}
      {body && (
        <div
          className='space-y-6 leading-[1.8] dark:text-neutral-300 mt-5'
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        ></div>
      )}
    </div>
  );
};

export default ProjectDetail;
