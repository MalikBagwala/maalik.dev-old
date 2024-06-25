import Link from 'next/link';
import { ReactNode } from 'react';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import { PiPuzzlePieceDuotone } from 'react-icons/pi';
interface LinkComponentProps {
  url: string;
  text: string;
  icon?: ReactNode;
}

interface ProjectLinkProps {
  title?: string;
  linkSourceCode?: string;
  linkDemo?: string;
}

const ProjectLink = ({ title, linkSourceCode, linkDemo }: ProjectLinkProps) => {
  const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
    const eventName = `Click ${text} - Project ${title}`;

    return (
      <Link href={url} target='_blank' passHref data-umami-event={eventName}>
        <div className='flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 w-full'>
          {icon}
          <span className='text-[15px] dark:text-teal-500 hover:dark:text-teal-400 transition-all duration-300'>
            {text}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className='flex gap-4'>
      {linkSourceCode && (
        <LinkComponent
          url={linkSourceCode}
          text='Source Code'
          icon={<PiPuzzlePieceDuotone size={22} />}
        />
      )}
      {linkSourceCode && linkDemo && (
        <span className='text-neutral-400 dark:text-neutral-600'>|</span>
      )}
      {linkDemo && (
        <LinkComponent
          url={linkDemo}
          text='Live Demo'
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
};

export default ProjectLink;
