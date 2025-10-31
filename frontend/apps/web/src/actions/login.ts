'use server';

import { LoginService } from '@/client/sdk.gen';
import { forwardCookiesFromResponse } from '@/utils/actions';

import { ApiResult } from '@/types/api';

export type LoginBody = Parameters<typeof LoginService.loginAccessToken>[0]['body'];

/**
 * Reuses FastApi types from client. Just forwards, doesn't validate.
 */
export const loginAction = async (
  _prevState: ApiResult,
  formData: FormData
): Promise<ApiResult> => {
  const body = Object.fromEntries(formData) as LoginBody;
  const apiResponse = await LoginService.loginAccessToken({ body });

  const { response, ...result } = apiResponse;
  await forwardCookiesFromResponse(response);

  return result;
};
