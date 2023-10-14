import {
  SiAmazonaws,
  SiChakraui,
  SiDjango,
  SiGitlab,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-500' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  'Chakra UI': <SiChakraui size={iconSize} className='text-teal-400' />,
  Django: <SiDjango size={iconSize} className='text-green-500' />,
  Python: <SiPython size={iconSize} className='text-blue-500' />,
  GitLab: <SiGitlab size={iconSize} className='text-orange-400' />,
  AWS: <SiAmazonaws size={iconSize} className='text-amber-700' />,
  Terraform: <SiTerraform size={iconSize} className='text-purple-500' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-700' />,
};
