/** Runs only once on server start. */

/** Log loaded env vars. */
export const register = async () => {
  console.log('process.env.NEXT_PUBLIC_API_URL 1', process.env.NEXT_PUBLIC_API_URL);

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { prettyPrintObject } = await import('@/utils/log');
    const { PROCESS_ENV } = await import('@/config/process-env');

    console.log('process.env.NEXT_PUBLIC_API_URL 2', process.env.NEXT_PUBLIC_API_URL);

    prettyPrintObject(PROCESS_ENV, 'parsed PROCESS_ENV');
  }
};
