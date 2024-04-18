'use client';
import { COOKIES_NAMES } from '@/constants';
import { revalidateServerPath } from '@/utils';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const LogOutBtn = () => {
  const router = useRouter();

  const onRemoveCookie = () => {
    deleteCookie(COOKIES_NAMES.isAuthorized);

    revalidateServerPath('/');

    router.push('/');
  };

  return (
    <button
      onClick={onRemoveCookie}
      className='h-[25px] flex justify-center text-sm items-center px-[10px] mx-[10px] rounded-[6px] border-white border-[1px] cursor-pointer'
    >
      Logout
    </button>
  );
};

export default LogOutBtn;
