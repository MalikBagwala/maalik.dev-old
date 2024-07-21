import { ReactNode } from 'react';
import { BiRocket as RocketIcon } from 'react-icons/bi';
import { FaTelegramPlane as TelegramIcon } from 'react-icons/fa';
import { HiOutlineMail as EmailIcon } from 'react-icons/hi';

import Button from '@/components/elements/Button';
interface ContactProps {
  title: string;
  icon: ReactNode;
  link: string;
  eventName: string;
}
const CONTACTS: ContactProps[] = [
  {
    title: 'hello@maalik.dev',
    icon: <EmailIcon size={18} />,
    link: 'mailto:hello@maalik.dev',
    eventName: 'Contact: Click Email Button',
  },
  {
    title: 'Telegram',
    icon: <TelegramIcon size={18} />,
    link: 'https://t.me/MalikBagwala',
    eventName: 'Contact: Click Telegram Button',
  },
];

const Services = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <section className='space-y-5'>
      <div className='p-8 bg-neutral-100 dark:bg-neutral-800 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h1 className='text-xl font-medium'>Let&apos;s work together!</h1>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          I&apos;m open for freelance projects, Feel free to get in touch and
          let&apos;s have a discussion about how we can work together.
        </p>
        <div className='flex flex-col md:flex-row gap-3'>
          {CONTACTS?.map((contact: ContactProps, index: number) => (
            <Button
              className='w-auto'
              key={index}
              onClick={() => handleAction(contact?.link)}
              icon={contact?.icon}
              data-umami-event={contact?.eventName}
            >
              {contact?.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
