'use server';

import { LoginService } from '@/client/sdk.gen';

type Body = Parameters<typeof LoginService.loginAccessToken>[0]['body'];
type Response = Omit<Awaited<ReturnType<typeof LoginService.loginAccessToken>>, 'response'>;

/**
 * Reuses FastApi types from client.
 * Just forwards, doesn't validate.
 */
export const loginAction = async (
  prevState: Response | null,
  formData: FormData
): Promise<Response> => {
  const body = Object.fromEntries(formData) as Body;
  const response = await LoginService.loginAccessToken({ body });

  const { response: _, ...result } = response;

  // Todo: must forward cookie from response
  // Maybe better login direct call without server action

  return result;
};

// Todo: define correct return type
