/**
 * Authentication utility functions.
 * Server only, because of http-only cookie.
 * import { cookies } from 'next/headers';
 */

import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { UsersService } from '@/client/sdk.gen';
import { AUTH_COOKIE } from '@/constants/auth';
import { ROUTES } from '@/constants/routes';

import type { Session } from '@/types/auth';

const { LOGIN } = ROUTES;

export const isAuthenticated = async (): Promise<boolean> => {
  const { data: me } = await UsersService.readUserMe();
  console.log('me', me);

  const isAuth = Boolean(me?.id && me?.email);

  return isAuth;
};

export const verifySession = async (): Promise<Session | null> => {
  const requestCookies = await cookies();
  const authCookie = requestCookies.get(AUTH_COOKIE)?.value;

  // Todo: regenerate client to use cookie
  // Must not decrypt JWT, but reuse python endpoint
  // const response = await ApiClient.usersReadUserMe({
  //   authCookie, // forward cookie from request
  // });
};

export const deleteSession = async (): Promise<void> => {
  const requestCookies = await cookies();
  requestCookies.delete(AUTH_COOKIE);
  redirect(LOGIN);
};

// Todo: implement for refreshing session
// export const updateSession = async (): Promise<void> => {};
