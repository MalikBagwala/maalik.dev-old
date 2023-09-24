import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GiscusComment {
  isEnableReaction?: boolean;
}

const GiscusComment = ({ isEnableReaction = false }: GiscusComment) => {
  const { theme } = useTheme();

  return (
    <div className='mt-5 mb-2'>
      <Giscus
        repo='MalikBagwala/maalik.dev'
        repoId='R_kgDOKM2QZw'
        category='General'
        categoryId='DIC_kwDOKM2QZ84CY_MU  '
        mapping='pathname'
        reactionsEnabled={isEnableReaction ? '1' : '0'}
        emitMetadata='0'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;
