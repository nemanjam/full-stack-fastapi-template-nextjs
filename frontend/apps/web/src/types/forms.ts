import { z } from 'zod';

import { loginFormSchema, userUpdateSchema } from '@/schemas/forms';

export type LoginFormValues = z.output<typeof loginFormSchema>;
export type LoginFormKeys = keyof LoginFormValues;

export type UserUpdateFormValues = z.output<typeof userUpdateSchema>;
export type UserUpdateFormKeys = keyof UserUpdateFormValues;
