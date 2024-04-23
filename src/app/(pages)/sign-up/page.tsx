import { SignUpForm } from '@/components/organisms';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <>
      <Image
        fill
        priority
        src={'/bg.jpg'}
        alt='bg'
        sizes='100vw'
        className='inset-0 -top-10 -z-10 h-full w-full object-cover blur[10px] brightness-100'
      />

      <div className='flex flex-col items-center justify-center min-w-full min-h-[80vh]'>
        <div className='mb-[20px]'>
          Sign up or{' '}
          <Link className='ml-[10px] text-activeOrange' href={'/sign-in'}>
            Sign in
          </Link>
        </div>

        <SignUpForm />
      </div>
    </>
  );
};

export default SignUpPage;
