'use client';

import { useActionState, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
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

import { profileUpdateAction } from '@/actions/profile';
import { UserPublic } from '@/client/types.gen';
import { profileUpdateSchema } from '@/schemas/forms';
import { isErrorApiResult, isSuccessApiResult } from '@/utils/api';
import { getApiErrorMessage } from '@/utils/error';
import { EVENTS } from '@/constants/events';

import { AlertProfileUpdateEventArgs } from '@/types/events';
import type { ProfileUpdateFormValues } from '@/types/forms';
import type { FC } from 'react';

interface Props {
  user: UserPublic;
}
const { ALERT_PROFILE_UPDATE_SHOW } = EVENTS;

const resolver = zodResolver(profileUpdateSchema);

const FormProfileUpdate: FC<Props> = ({ user }) => {
  const initialState = { data: undefined };
  const [state, formAction, isPending] = useActionState(profileUpdateAction, initialState);

  const defaultValues: ProfileUpdateFormValues = {
    user_id: user.id,
    email: user.email,
    full_name: user.full_name ?? '',
  } as const;

  const form = useForm<ProfileUpdateFormValues>({ resolver, defaultValues });

  const isSuccess = isSuccessApiResult(state);
  const isError = isErrorApiResult(state);

  const showAlert = (alertArgs: AlertProfileUpdateEventArgs) => {
    const showEvent = new CustomEvent(ALERT_PROFILE_UPDATE_SHOW, { detail: alertArgs });
    window.dispatchEvent(showEvent);
  };

  useEffect(() => {
    let alertArgs: AlertProfileUpdateEventArgs | null = null;

    switch (true) {
      case isSuccess:
        alertArgs = {
          variant: 'success',
          message: 'Profile updated successfully',
        };
        break;

      case isError:
        alertArgs = {
          variant: 'destructive',
          message: getApiErrorMessage(state.error),
        };
        break;

      default:
        alertArgs = null;
        break;
    }

    if (alertArgs) showAlert(alertArgs);
  }, [isSuccess, isError, state]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <input type="hidden" {...form.register('user_id')} />

        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email address..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              'Update Profile'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormProfileUpdate;
