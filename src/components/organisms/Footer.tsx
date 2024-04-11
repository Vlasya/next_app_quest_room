import React from 'react';
import { ImageLink } from '@/components/atoms';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/icons';

const Footer = () => {
  return (
    <div className='flex w-[65px] justify-between'>
      <ImageLink link='https://www.instagram.com/'>
        <InstagramIcon className='fill-iconGrey hover:fill-iconViolet mr-[20px]' />
      </ImageLink>
      <ImageLink link='https://twitter.com/'>
        <TwitterIcon className='fill-iconGrey hover:fill-iconBlue mr-[20px]' />
      </ImageLink>
      <ImageLink link='https://www.youtube.com/'>
        <YoutubeIcon className='fill-iconGrey hover:fill-iconRed' />
      </ImageLink>
    </div>
  );
};

export default Footer;
