import { Tab } from '@/types';

export const ROUTS = {
  BASE_CATALOG: '/',
  FOR_BEGINNERS: '/for-beginners',
  DISCOUNT: '/discount',
  FEEDBACK: '/feedback',
  CONTACTS: '/contacts',
  DETAILED_QUEST: '/detailed-quest',
};

export const PAGES_NAMES = {
  CATALOG: 'Ігри',
  FOR_BEGINNERS: 'Новачкам',
  FEEDBACK: 'Відгуки',
  DISCOUNT: 'Акції',
  CONTACTS: 'Контакти',
};

export const NAVIGATION_TABS: Tab[] = [
  {
    link: ROUTS.BASE_CATALOG,
    name: PAGES_NAMES.CATALOG,
  },
  {
    link: ROUTS.FOR_BEGINNERS,
    name: PAGES_NAMES.FOR_BEGINNERS,
  },
  {
    link: ROUTS.FEEDBACK,
    name: PAGES_NAMES.FEEDBACK,
  },
  {
    link: ROUTS.DISCOUNT,
    name: PAGES_NAMES.DISCOUNT,
  },
  {
    link: ROUTS.CONTACTS,
    name: PAGES_NAMES.CONTACTS,
  },
];
