import { ROUTS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href={ROUTS.BASE_CATALOG} aria-label='Logo'>
      <Image src='/logo.svg' width='42' height='42' alt='logo' />
    </Link>
  );
};

export default Logo;
