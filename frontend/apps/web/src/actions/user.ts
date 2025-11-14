'use server';

import { revalidatePath } from 'next/cache';

import { UsersService } from '@/client/sdk.gen';
import { UserUpdate } from '@/client/types.gen';
import { ROUTES } from '@/constants/routes';

import type { ApiResult } from '@/types/api';

const { ADMIN } = ROUTES;

export const userDeleteAction = async (userId: string): Promise<ApiResult> => {
  const apiResponse = await UsersService.deleteUser({
    path: {
      user_id: userId,
    },
  });
  const { response: _, ...result } = apiResponse;

  revalidatePath(ADMIN);

  return result;
};

export const userUpdateAction = async (
  _prevState: ApiResult,
  formData: FormData
): Promise<ApiResult> => {
  const user_id = formData.get('user_id') as string;
  const body = Object.fromEntries(formData) as UserUpdate;

  const apiResponse = await UsersService.updateUser({
    path: { user_id },
    body,
  });

  const { response: _, ...result } = apiResponse;

  revalidatePath(ADMIN);

  return result;
};
