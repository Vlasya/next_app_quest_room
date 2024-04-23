import { NextResponse, type NextRequest } from 'next/server';
import { COOKIES_NAMES, PUBLIC_ROUTES } from '@/constants';
import { redirect } from 'next/navigation';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  let isAuth = request.cookies.get(COOKIES_NAMES.isAuthorized);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (!isAuth && !isPublicRoute) {
    return Response.redirect(new URL('/sign-in', nextUrl));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|logo.svg|favicon.ico|sign-up|.*\\.png$).*)',
  ],
};
