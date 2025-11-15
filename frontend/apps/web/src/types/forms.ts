import { z } from 'zod';

import { loginFormSchema, userCreateSchema, userUpdateSchema } from '@/schemas/forms';

export type LoginFormValues = z.output<typeof loginFormSchema>;
export type LoginFormKeys = keyof LoginFormValues;

export type UserUpdateFormValues = z.output<typeof userUpdateSchema>;
export type UserUpdateFormKeys = keyof UserUpdateFormValues;

export type UserCreateFormValues = z.output<typeof userCreateSchema>;
export type UserCreateFormKeys = keyof UserCreateFormValues;
