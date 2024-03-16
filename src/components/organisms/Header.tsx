import { Logo, PhoneLink } from '@/components/atoms';
import { NavigationTabsBlock } from '@/components/molecules';
import { NAVIGATION_TABS } from '@/constants';

const Header = () => {
  return (
    <div className='px-[34px] py-[24px] flex justify-between '>
      <Logo />
      <NavigationTabsBlock tabs={NAVIGATION_TABS} />
      <PhoneLink/>
    </div>
  );
};

export default Header;
