import { motion } from 'framer-motion';

import EmptyState from '@/components/atoms/EmptyState';
import { ProjectsProps } from '@/types/projects';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }: ProjectsProps) => {
  if (projects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
