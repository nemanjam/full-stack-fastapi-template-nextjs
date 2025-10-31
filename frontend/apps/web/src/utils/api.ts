import { HttpValidationError } from '@/client/types.gen';
import { API_ERROR_MESSAGE } from '@/constants/error';

import { ApiResult } from '@/types/api';

export const isErrorApiResult = (
  result: ApiResult
): result is { data: undefined; error: HttpValidationError } =>
  'error' in result && result.error !== undefined;

/** Either doesn't have key or it's undefined. Must initialize to null.*/
export const isSuccessApiResult = (
  result: ApiResult
): result is { data: unknown; error: undefined } => 'data' in result && result.data !== undefined;

export const getApiErrorMessage = (error: unknown): string => {
  let errorMessage: string = API_ERROR_MESSAGE._500;

  const detail = (error as any)?.body?.detail;

  // detail is array
  if (Array.isArray(detail) && detail.length > 0 && typeof detail[0].msg === 'string')
    errorMessage = detail[0].msg;

  // detail is string
  if (typeof detail === 'string') errorMessage = detail;

  return errorMessage;
};
