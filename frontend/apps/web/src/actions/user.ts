'use server';

import { revalidatePath } from 'next/cache';

import { UsersService } from '@/client/sdk.gen';
import { ROUTES } from '@/constants/routes';

import type { ApiResult } from '@/types/api';

const { ADMIN } = ROUTES;

export const deleteUserAction = async (userId: string): Promise<ApiResult> => {
  const apiResponse = await UsersService.deleteUser({
    path: {
      user_id: userId,
    },
  });
  const { response: _, ...result } = apiResponse;

  revalidatePath(ADMIN);

  return result;
};
