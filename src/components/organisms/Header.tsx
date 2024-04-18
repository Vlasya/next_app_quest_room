
import { Logo, PhoneLink } from '@/components/atoms';
import { LogOutBtn, NavigationTabsBlock } from '@/components/molecules';
import {  NAVIGATION_TABS } from '@/constants';
import { getAuthCookies } from '@/utils';

const Header = async () => {
  const isAuth = await getAuthCookies();

  return (
    <header className='px-[34px] py-[24px] flex justify-between '>
      <Logo />
      <NavigationTabsBlock tabs={NAVIGATION_TABS} />
      <div className='flex'>
        <PhoneLink />
        <div>{isAuth && <LogOutBtn />}</div>
      </div>
    </header>
  );
};

export default Header;
