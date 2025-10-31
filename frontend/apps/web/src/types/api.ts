import { RequestResult } from '@/client/client/types.gen';

// Fix: fails for one union branch only
export type _ApiResult<
  TData = unknown,
  TError = unknown,
  ThrowOnError extends boolean = false,
> = Omit<Awaited<RequestResult<TData, TError, ThrowOnError>>, 'response'>;

/**
 * Duplicated definition:
 * src/client/client/types.gen.ts
 */
export type ApiResult<
  TData = unknown,
  TError = unknown,
  ThrowOnError extends boolean = boolean,
> = ThrowOnError extends true
  ? {
      data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
    }
  :
      | {
          data: TData extends Record<string, unknown> ? TData[keyof TData] : TData;
          error: undefined;
        }
      | {
          data: undefined;
          error: TError extends Record<string, unknown> ? TError[keyof TError] : TError;
        };
