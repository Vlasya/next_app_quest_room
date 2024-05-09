import { type NextRequest } from 'next/server';
import { COOKIES_NAMES, PUBLIC_ROUTES } from '@/constants';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { getLastSegment } from '@/utils';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  let isAuth = request.cookies.get(COOKIES_NAMES.isAuthorized);

  const isPublicRoute = PUBLIC_ROUTES.includes(
    `/${getLastSegment(nextUrl.pathname)}`
  );
  if (!isAuth && !isPublicRoute) {
    return Response.redirect(new URL('/sign-in', nextUrl));
  }
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|static|.*\\..*|_next|logo.svg|favicon.ico|.*\\.png$).*)',
  ],
};
