import { MENU_ITEMS, SOCIAL_MEDIA } from '@/constant/menu';

import Menu from './Menu';
import Breakline from '../elements/Breakline';
import SocialMedia from '../elements/SocialMedia';

const Navigation = () => {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);

  return (
    <>
      <Menu list={filterdMenu} />

      <Breakline />
      <SocialMedia items={filteredSocialMedia} />
    </>
  );
};

export default Navigation;
