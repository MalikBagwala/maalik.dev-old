import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
  BsMedium as MediumIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import { FaGitlab } from 'react-icons/fa';
import {
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';

import { SiUpwork } from 'react-icons/si';
import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
    href: 'mailto:hello@maalik.dev',
  },

  {
    title: 'Linkedin',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-blue-500 border border dark:border-neutral-700',
    type: 'Link',
    href: 'https://www.linkedin.com/in/malikbagwala/',
  },
  {
    title: 'Twitter',
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Twitter',
    className: '!bg-sky-500 border border dark:border-neutral-700',
    type: 'Link',
    href: 'https:// twitter.com/malikbagwala',
  },
  {
    title: 'Medium',
    icon: <MediumIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Medium',
    className: '!bg-sky-500 border border dark:border-neutral-700',
    type: 'Link',
    href: 'https://medium.com/@maalik',
  },
  {
    title: 'GitLab',
    icon: <FaGitlab size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: GitLab',
    className: '!bg-orange-700 border border dark:border-neutral-700',
    type: 'Link',
    href: 'https://gitlab.com/malikbagwala',
  },
  {
    title: 'GitHub',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
    href: 'https://github.com/malikbagwala',
  },
  {
    title: 'Upwork',
    icon: <SiUpwork size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Upwork',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
    href: 'https://www.upwork.com/freelancers/maalik',
  },
];
