'use server';

import { LoginService } from '@/client/sdk.gen';
import { BodyLoginLoginAccessToken } from '@/client/types.gen';
import { forwardCookiesFromResponse } from '@/utils/actions';

import type { ApiResult } from '@/types/api';

/**
 * Reuses FastApi types from client. Just forwards, doesn't validate.
 */
export const loginAction = async (
  _prevState: ApiResult,
  formData: FormData
): Promise<ApiResult> => {
  const body = Object.fromEntries(formData) as BodyLoginLoginAccessToken;
  const apiResponse = await LoginService.loginAccessToken({ body });

  const { response, ...result } = apiResponse;
  await forwardCookiesFromResponse(response);

  return result;
};
