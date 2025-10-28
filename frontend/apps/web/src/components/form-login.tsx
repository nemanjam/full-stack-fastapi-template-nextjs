'use client';

import { FC, useActionState } from 'react';

import { loginAction } from '@/actions/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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

import { loginFormSchema } from '@/schemas/forms';

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

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
