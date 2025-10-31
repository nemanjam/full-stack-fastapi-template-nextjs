'use client';

import { FC, useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Alert, AlertDescription } from '@workspace/ui/components/ui/alert';
import { Button } from '@workspace/ui/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@workspace/ui/components/ui/form';
import { Input } from '@workspace/ui/components/ui/input';

import { loginAction } from '@/actions/login';
import { loginFormSchema } from '@/schemas/forms';
import { getApiErrorMessage, isErrorApiResult, isSuccessApiResult } from '@/utils/api';

import { ApiResult } from '@/types/api';
import type { LoginFormValues } from '@/types/forms';

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

    const timer = setTimeout(() => {
      // router.push('/dashboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, [isSuccess, router]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="admin@example.com" {...field} disabled={isPending} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
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

        {isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{getApiErrorMessage(state.error)}</AlertDescription>
          </Alert>
        )}

        {isSuccess && <div className="text-sm font-medium text-green-600">Login successful!</div>}

        <pre>{JSON.stringify(state, null, 2)}</pre>

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
