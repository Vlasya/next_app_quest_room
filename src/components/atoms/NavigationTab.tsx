import Link from 'next/link';
import React from 'react';

interface Props {
  link: string;
  name: string;
  isActive: boolean;
}

const NavigationTab = ({ link, name, isActive }: Props) => {
  return (
    <li className='mr-[47px] last:mr-0'>
      <Link
        className={`
        font-semibold  text-sm
        ${isActive ? 'text-activeYellow' : 'text-baseTextColor'}`}
        href={link}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavigationTab;
