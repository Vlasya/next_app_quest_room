import Link from 'next/link';
import Image from 'next/image';
import { SignInForm } from '@/components/organisms';
import initTranslations from '@/app/i18n';

interface Props {
  params: { locale: string };
}

const SignInPage = async ({ params: { locale } }: Props) => {
  const { t } = await initTranslations(locale, ['default']);
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
          {t('signInTitle')}

          <Link className='ml-[10px] text-activeOrange' href={'/sign-up'}>
            {t('signUp')}
          </Link>
        </div>

        <SignInForm />
      </div>
    </>
  );
};

export default SignInPage;
