import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  link: string;
  image: string;
}

const ImageLink = ({ link, image }: Props) => {
  return (
    <Link
      href={link}
      className='w-[28px] h-[28px] rounded-full bg-greyBg flex justify-center items-center'
      target='_blank'
    >
      <Image alt={image} src={image} width={20} height={20} />
    </Link>
  );
};

export default ImageLink;
