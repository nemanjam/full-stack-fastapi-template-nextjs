import useCustomToast from '@workspace/ui/hooks/useCustomToast';

import type { ApiError } from '@/client';

export const handleError = (err: ApiError) => {
  const { showErrorToast } = useCustomToast();
  const errDetail = (err.body as any)?.detail;
  let errorMessage = errDetail || 'Something went wrong.';
  if (Array.isArray(errDetail) && errDetail.length > 0) {
    errorMessage = errDetail[0].msg;
  }
  showErrorToast(errorMessage);
};

export const isClient = (): boolean => typeof window !== 'undefined';
