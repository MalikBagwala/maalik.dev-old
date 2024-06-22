import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width && width < 769);

  useEffect(() => {
    if (width) setIsMobile(width < 821);
  }, [width]);

  return isMobile;
};

export default useIsMobile;
