import {
  SiAmazonaws,
  SiChakraui,
  SiDigitalocean,
  SiDjango,
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
  Postgres: (
    <SiPostgresql
      strokeWidth={0.7}
      size={iconSize}
      className='text-yellow-400'
    />
  ),
  Hasura: <SiHasura size={iconSize} className='text-green-400' />,
  Caddy: <SiServerfault size={iconSize} className='text-orange-400' />,
  Plausible: (
    <SiPlausibleanalytics size={iconSize} className='text-purple-400' />
  ),
  DigitalOcean: <SiDigitalocean size={iconSize} className='text-sky-500' />,
  RabbitMQ: <SiRabbitmq size={iconSize} className='text-orange-600' />,
  GitLab: <SiGitlab size={iconSize} className='text-orange-400' />,
  AWS: <SiAmazonaws size={iconSize} className='text-amber-700' />,
  Terraform: <SiTerraform size={iconSize} className='text-purple-500' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-700' />,
  Go: <SiGo size={iconSize} className='text-blue-500' />,
  Railway: (
    <SiRailway size={iconSize} className='text-gray-600 dark:text-white' />
  ),
  HTML5: <SiHtml5 size={iconSize} className='text-orange-700' />,
  GitHub: (
    <SiGithub size={iconSize} className='text-gray-700 dark:text-white' />
  ),
};
