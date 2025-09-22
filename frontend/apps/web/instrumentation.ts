/** Runs only once on server start. */
export const register = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { prettyPrintObject } = await import('@/utils/log');
    const { PROCESS_ENV } = await import('@/config/process-env');

    prettyPrintObject(PROCESS_ENV, 'parsed PROCESS_ENV');
  }
};
