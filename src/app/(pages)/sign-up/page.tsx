import { SignUpForm } from '@/components/organisms';
import Image from 'next/image';



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

      <div className='flex items-center justify-center min-w-full min-h-[80vh]'>
        <SignUpForm/>
       
      </div>
    </>
  );
};

export default SignUpPage;
