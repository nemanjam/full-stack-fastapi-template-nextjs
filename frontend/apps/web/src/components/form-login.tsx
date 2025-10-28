'use client';

import { FC, useTransition } from 'react';

import { loginAction } from '@/actions/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
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
import { objectToFormData } from '@/utils/form';

import type { LoginFormValues } from '@/types/forms';

const defaultValues: LoginFormValues = {
  username: '', // Todo: rename to email
  password: '',
} as const;

const resolver = zodResolver(loginFormSchema);

const FormLogin: FC = () => {
  const form = useForm<LoginFormValues>({ resolver, defaultValues });

  const [actionResponse, formAction] = useFormState(loginAction, initialActionResponse);
  const [isPending, startTransition] = useTransition();

  // ! fix this: in React 19 changed to import { useActionState } from 'react';
  // const [state, submit, isPending] = useFormState<typeof loginAction, FormData>(
  //   loginAction,
  //   {} as ReturnType<typeof loginAction> // initial state matches output type
  // );

  const onSubmit = (data: LoginFormValues) => {
    console.log('data', data);

    const formData = objectToFormData(data);
    startTransition(() => formAction(formData));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormLogin;
