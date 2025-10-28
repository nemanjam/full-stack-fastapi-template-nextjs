import { z } from 'zod';

import { loginFormSchema } from '@/schemas/forms';

export type LoginFormValues = z.output<typeof loginFormSchema>;
export type LoginFormKeys = keyof LoginFormValues;
