import {
  SiAmazonaws,
  SiChakraui,
  SiCss3,
  SiDart,
  SiDigitalocean,
  SiDjango,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGo,
  SiGraphql,
  SiHasura,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiPlausibleanalytics,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiRailway,
  SiReact,
  SiServerfault,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

type StacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: StacksProps = {
  flutter: <SiFlutter size={iconSize} className='text-blue-300' />,
  dart: <SiDart size={iconSize} className='text-teal-300' />,
  javascript: <SiJavascript size={iconSize} className='text-yellow-500' />,
  typescript: <SiTypescript size={iconSize} className='text-blue-400' />,
  next: <SiNextdotjs size={iconSize} />,
  react: <SiReact size={iconSize} className='text-sky-500' />,
  tailwindcss: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  graphql: <SiGraphql size={iconSize} className='text-pink-600' />,
  chakra: <SiChakraui size={iconSize} className='text-teal-400' />,
  django: <SiDjango size={iconSize} className='text-green-500' />,
  python: <SiPython size={iconSize} className='text-blue-500' />,
  postgresql: (
    <SiPostgresql
      strokeWidth={0.7}
      size={iconSize}
      className='text-yellow-400'
    />
  ),
  hasura: <SiHasura size={iconSize} className='text-green-400' />,
  caddy: <SiServerfault size={iconSize} className='text-orange-400' />,
  plausible: (
    <SiPlausibleanalytics size={iconSize} className='text-purple-400' />
  ),
  digitalocean: <SiDigitalocean size={iconSize} className='text-sky-500' />,
  rabbitmq: <SiRabbitmq size={iconSize} className='text-orange-600' />,
  gitlab: <SiGitlab size={iconSize} className='text-orange-400' />,
  aws: <SiAmazonaws size={iconSize} className='text-amber-700' />,
  terraform: <SiTerraform size={iconSize} className='text-purple-500' />,
  kubernetes: <SiKubernetes size={iconSize} className='text-blue-700' />,
  go: <SiGo size={iconSize} className='text-blue-500' />,
  railway: (
    <SiRailway size={iconSize} className='text-gray-600 dark:text-white' />
  ),
  html5: <SiHtml5 size={iconSize} className='text-orange-700' />,
  github: (
    <SiGithub size={iconSize} className='text-gray-700 dark:text-white' />
  ),
  css3: <SiCss3 size={iconSize} className='text-blue-300' />,
};
