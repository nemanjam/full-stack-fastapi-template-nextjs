import { z } from 'zod';

import {
  itemCreateSchema,
  itemUpdateSchema,
  loginFormSchema,
  profileUpdateSchema,
  userCreateSchema,
  userUpdateSchema,
} from '@/schemas/forms';

// login
export type LoginFormValues = z.output<typeof loginFormSchema>;
export type LoginFormKeys = keyof LoginFormValues;

// user
export type UserUpdateFormValues = z.output<typeof userUpdateSchema>;
export type UserUpdateFormKeys = keyof UserUpdateFormValues;

export type UserCreateFormValues = z.output<typeof userCreateSchema>;
export type UserCreateFormKeys = keyof UserCreateFormValues;

// profile
export type ProfileUpdateFormValues = z.output<typeof profileUpdateSchema>;
export type ProfileUpdateFormKeys = keyof ProfileUpdateFormValues;

// item
export type ItemUpdateFormValues = z.output<typeof itemUpdateSchema>;
export type ItemUpdateFormKeys = keyof ItemUpdateFormValues;

export type ItemCreateFormValues = z.output<typeof itemCreateSchema>;
export type ItemCreateFormKeys = keyof ItemCreateFormValues;
