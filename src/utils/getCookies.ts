'use server';
import { COOKIES_NAMES } from '@/constants';
import { cookies } from 'next/headers';

const getAuthCookies = async () => {
  const cookieStore = cookies();
  const isAuth = await cookieStore.get(COOKIES_NAMES.isAuthorized);

  return !!isAuth?.value;
};

export default getAuthCookies;
