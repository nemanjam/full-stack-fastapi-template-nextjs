'use server';

import { LoginService } from '@/client/sdk.gen';

type Body = Parameters<typeof LoginService.loginAccessToken>[0]['body'];
type Response = ReturnType<typeof LoginService.loginAccessToken>;

/**
 * Reuses FastApi types from client.
 * Just forwards, doesn't validate.
 */
export const loginAction = async (prevState: Response, formData: FormData): Promise<Response> => {
  const body = Object.fromEntries(formData) as Body;
  const response = await LoginService.loginAccessToken({ body });

  return response;
};

// result must be of type

type ServerActionResult<T> = {
  data?: T;
  error?: unknown; // or HttpValidationError
  response: Response;
};
