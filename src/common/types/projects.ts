export interface ProjectItemProps {
  slug: string;
  frontMatter: {
    title: string;
    description: string;
    image: string;
    thumbnail?: string;
    linkDemo?: string;
    linkSourceCode: string;
    stacks: string[];
    isShow: true;
    isFeatured: true;
  };
  content?: string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
