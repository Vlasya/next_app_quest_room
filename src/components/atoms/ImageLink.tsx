import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  link: string;
  children: React.ReactNode;
}

const ImageLink = ({ link, children }: Props) => {
  return (
    <Link href={link} target='_blank'>
      {children}
    </Link>
  );
};

export default ImageLink;
