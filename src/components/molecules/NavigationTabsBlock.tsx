'use client';
import { Tab } from '@/types';
import React from 'react';
import { NavigationTab } from '@/components/atoms';
import { usePathname } from 'next/navigation';
import { ROUTS } from '@/constants';

interface Props {
  tabs: Tab[];
}

const NavigationTabs = ({ tabs}: Props) => {
  const pathname = usePathname();
  
  const isDetailPage = pathname.includes(ROUTS.DETAILED_QUEST);
  return (
    <ul className='flex'>
      {tabs.map((tab) => (
        <NavigationTab
          key={tab.name}
          link={tab.link}
          name={tab.name}
          isActive={
            pathname === tab.link ||
            (isDetailPage && tab.link === ROUTS.BASE_CATALOG)
          }
        />
      ))}
    </ul>
  );
};

export default NavigationTabs;
