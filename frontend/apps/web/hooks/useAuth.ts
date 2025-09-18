'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { LoginService, UsersService } from '@/client';
import { handleError, isClient } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type {
  Body_login_login_access_token as AccessToken,
  ApiError,
  UserPublic,
  UserRegister,
} from '@/client';

const isLoggedIn = () => isClient() && localStorage.getItem('access_token') !== null;

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { data: user } = useQuery<UserPublic | null, Error>({
    queryKey: ['currentUser'],
    queryFn: UsersService.readUserMe,
    enabled: isLoggedIn(),
  });

  const signUpMutation = useMutation({
    mutationFn: (data: UserRegister) => UsersService.registerUser({ requestBody: data }),

    onSuccess: () => {
      router.push('/login');
    },
    onError: (err: ApiError) => {
      handleError(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const login = async (data: AccessToken) => {
    const response = await LoginService.loginAccessToken({
      formData: data,
    });
    localStorage.setItem('access_token', response.access_token);
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.push('/');
    },
    onError: (err: ApiError) => {
      handleError(err);
    },
  });

  const logout = () => {
    localStorage.removeItem('access_token');
    router.push('/login');
  };

  return {
    signUpMutation,
    loginMutation,
    logout,
    user,
    error,
    resetError: () => setError(null),
  };
};

export { isLoggedIn };
export default useAuth;
