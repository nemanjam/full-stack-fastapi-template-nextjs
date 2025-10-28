export const getErrorMessage = (error: any): string => {
  const errorDetail = error.body?.detail;
  let errorMessage = errorDetail || 'Something went wrong.';

  if (Array.isArray(errorDetail) && errorDetail.length > 0) {
    errorMessage = errorDetail[0].msg;
  }

  return errorMessage;
};

// Todo: server and client error handlers (loggers)
