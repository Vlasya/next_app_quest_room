import React from 'react';
import ImageLink from '@/components/atoms/ImageLink';

const Footer = () => {
  return (
    <div className='flex w-[65px] justify-between'>
      <ImageLink image='/social/skype.svg' link='https://www.skype.com/'/>
      <ImageLink image='/social/facebook.svg' link='https://www.facebook.com/' />
    </div>
  );
};

export default Footer;
