'use client';

import { FC, useActionState } from 'react';

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
import { getErrorMessage } from '@/utils/error';

import type { LoginFormValues } from '@/types/forms';

const defaultValues: LoginFormValues = {
  username: '', // Todo: rename to email
  password: '',
} as const;

const resolver = zodResolver(loginFormSchema);

const FormLogin: FC = () => {
  const form = useForm<LoginFormValues>({ resolver, defaultValues });

  const [state, formAction, isPending] = useActionState(loginAction, null);

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
                <Input placeholder="admin@example.com" {...field} />
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

        {/* Display general server errors */}
        {state && 'error' in state && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{getErrorMessage(state.error)}</AlertDescription>
          </Alert>
        )}

        {/* Display success state */}
        {state && 'data' in state && (
          <div className="text-sm font-medium text-green-600">Login successful!</div>
        )}

        <pre>{JSON.stringify(state, null, 2)}</pre>

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
