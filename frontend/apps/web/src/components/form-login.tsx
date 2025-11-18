'use client';

import { FC, useActionState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Alert, AlertDescription } from '@workspace/ui/components/ui/alert';
import { Button } from '@workspace/ui/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@workspace/ui/components/ui/form';
import { Input } from '@workspace/ui/components/ui/input';

import { loginAction } from '@/actions/login';
import { loginFormSchema } from '@/schemas/forms';
import { isErrorApiResult, isSuccessApiResult } from '@/utils/api';
import { getApiErrorMessage } from '@/utils/error';
import { ROUTES } from '@/constants/routes';

import { ApiResult } from '@/types/api';
import type { LoginFormValues } from '@/types/forms';

const { DASHBOARD, FORGOT_PASSWORD } = ROUTES;

const defaultValues: LoginFormValues = {
  username: '', // Todo: rename to email
  password: '',
} as const;

const resolver = zodResolver(loginFormSchema);

const FormLogin: FC = () => {
  const router = useRouter();

  const form = useForm<LoginFormValues>({ resolver, defaultValues });

  // Note: only one union branch should be possible
  const initialState: ApiResult = { data: undefined };

  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  const isError = isErrorApiResult(state);
  const isSuccess = isSuccessApiResult(state);

  useEffect(() => {
    if (!isSuccess) return;

    router.push(DASHBOARD);
  }, [isSuccess, router]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="admin@example.com" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p>
          <Link
            href={FORGOT_PASSWORD}
            className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
          >
            Forgot password?
          </Link>
        </p>

        {isSuccess && (
          <p className="text-sm font-medium text-green-600">
            Login successful. Redirecting to dashboard...
          </p>
        )}

        {isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{getApiErrorMessage(state.error)}</AlertDescription>
          </Alert>
        )}

        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium"
        >
          {isPending ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
