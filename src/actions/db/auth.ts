'use server';

import { cookies } from 'next/headers';
import db from '@/clients/db';
import { LoginUser, User } from '@/types';
import { getErrorMessage } from '@/utils';
import { COOKIES_NAMES } from '@/constants';
import { use } from 'react';

export const signUp = async (newUser: User) => {
  try {
    await db.user.create({
      data: newUser,
    });
    cookies().set(COOKIES_NAMES.isAuthorized, 'true');
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export const SignIn = async (user: LoginUser) => {
  try {
    const userInfo = await db.user.findUnique({
      where: {
        email: user.email,
        password: user.password,
      },
    });
    if (userInfo) {
      cookies().set(COOKIES_NAMES.isAuthorized, 'true');
    } else {
      return {
        error: getErrorMessage('Incorrect email or password'),
      };
    }
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
