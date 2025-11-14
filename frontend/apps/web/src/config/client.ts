import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  PAGE_SIZE_TABLE: 3,
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);
