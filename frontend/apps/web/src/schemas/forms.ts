import { z } from 'zod';

// Todo: must match Pydantic in backend/app/models.py

// login
export const loginFormSchema = z.object({
  username: z.email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

// user
export const userUpdateSchema = z.object({
  user_id: z.string(),
  email: z.email(),
  full_name: z.string().min(2),
  is_superuser: z.boolean().optional(),
});

export const userCreateSchema = z.object({
  email: z.email(),
  full_name: z.string().min(2),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }), // 8 chars...
  is_superuser: z.boolean().optional(),
});

// profile
export const profileUpdateSchema = z.object({
  user_id: z.string(),
  email: z.email(),
  full_name: z.string().min(2),
});

export const profilePasswordUpdateSchema = z
  .object({
    current_password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    new_password: z.string().min(6, { message: 'New password must be at least 6 characters long' }),
    confirm_password: z
      .string()
      .min(6, { message: 'New password must be at least 6 characters long' }),
  })
  .refine(
    (data) => {
      console.log('data', data);

      return data.new_password === data.confirm_password;
    },
    {
      message: "Passwords don't match",
      path: ['confirm_password'], // attach error to confirm_password field
    }
  );

// item
export const itemUpdateSchema = z.object({
  id: z.string(),
  title: z.string().min(2),
  description: z.string().min(2).optional().or(z.literal('')),
});

export const itemCreateSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2).optional().or(z.literal('')),
});
