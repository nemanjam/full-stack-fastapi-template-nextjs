// export const handleError = (err: ApiError) => {
//   const { showErrorToast } = useCustomToast();
//   const errDetail = (err.body as any)?.detail;
//   let errorMessage = errDetail || 'Something went wrong.';
//   if (Array.isArray(errDetail) && errDetail.length > 0) {
//     errorMessage = errDetail[0].msg;
//   }
//   showErrorToast(errorMessage);
// };

// Look at tiangolo-starter frontend/src/client/core/ApiError.ts

// Todo: server and client error handlers (loggers)
