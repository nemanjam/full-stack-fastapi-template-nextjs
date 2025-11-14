import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

// Todo: must match Pydantic
export const userUpdateSchema = z.object({
  email: z.email(),
  full_name: z.string().min(2),
  is_superuser: z.boolean().optional(),
  user_id: z.string(),
});
