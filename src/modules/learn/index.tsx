import { motion } from 'framer-motion';

import EmptyState from '@/common/components/elements/EmptyState';
import { ContentProps } from '@/common/types/learn';

import LearnCard from './components/LearnCard';

interface LearnModuleProps {
  contents: ContentProps[];
}

const LearnModule = ({ contents }: LearnModuleProps) => {
  if (!contents?.length)
    return <EmptyState message='There is nothing here, yet.' />;
  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2'>
      {contents?.map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnCard {...content} />
        </motion.div>
      ))}
    </div>
  );
};

export default LearnModule;
