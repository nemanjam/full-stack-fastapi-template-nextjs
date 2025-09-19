'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { FiLock, FiMail } from 'react-icons/fi';

import Logo from '@workspace/ui/assets/images/fastapi-logo.svg';
import { Button } from '@workspace/ui/components/ui/button';
import { Card, CardContent } from '@workspace/ui/components/ui/card';
import { Input } from '@workspace/ui/components/ui/input';
import { Label } from '@workspace/ui/components/ui/label';
import { Separator } from '@workspace/ui/components/ui/separator';
import { cn, emailPattern, passwordRules } from '@workspace/ui/lib/utils';

import useAuth, { isLoggedIn } from '@/hooks/useAuth';

import type { Body_login_login_access_token as AccessToken } from '@/client';
import type { SubmitHandler, UseFormProps } from 'react-hook-form';

const defaultValues: AccessToken = {
  username: '',
  password: '',
};

const formOptions: UseFormProps<AccessToken> = { mode: 'onBlur', criteriaMode: 'all' };

const LoginPage: FC = () => {
  const { loginMutation, error, resetError } = useAuth();

  const { register, handleSubmit, formState } = useForm<AccessToken>({
    ...formOptions,
    defaultValues,
  });
  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return;

    resetError();

    try {
      await loginMutation.mutateAsync(data);
    } catch {
      // error is handled by useAuth hook
    }
  };

  // Todo: rewrite with ShadCN form https://ui.shadcn.com/docs/components/form
  // Todo: use server actions

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-sm p-6">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col items-center mb-4">
                <Image src={Logo} alt="FastAPI logo" height={64} className="mb-2" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Email</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiMail />
                  </span>
                  <Input
                    id="username"
                    type="email"
                    placeholder="Email"
                    className={cn('pl-10', { 'border-red-500': errors.username })}
                    {...register('username', {
                      required: 'Username is required',
                      pattern: emailPattern,
                    })}
                  />
                </div>
                {errors.username && (
                  <p className="text-xs text-red-500 mt-1">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiLock />
                  </span>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={cn('pl-10', { 'border-red-500': errors.password })}
                    {...register('password', passwordRules())}
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>

              {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

              <Link href="/recover-password" className="text-xs text-blue-600 hover:underline">
                Forgot Password?
              </Link>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Logging in...' : 'Log In'}
              </Button>

              <Separator />

              <div className="text-center text-sm">
                Don't have an account?
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
