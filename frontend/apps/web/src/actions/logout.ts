'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AUTH_COOKIE } from '@/constants/auth';
import { ROUTES } from '@/constants/routes';

const { LOGIN } = ROUTES;

export const logoutAction = async (): Promise<void> => {
  const cookiesList = await cookies();
  cookiesList.delete(AUTH_COOKIE);

  redirect(LOGIN);
};
