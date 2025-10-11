// @ts-nocheck

import { defineConfig } from '@hey-api/openapi-ts';

const config = defineConfig({
  input: './openapi.json',
  output: './src/client',
  // exportSchemas: true,
  plugins: [
    '@hey-api/client-axios',
    // '@hey-api/client-next',
    {
      name: '@hey-api/sdk',
      // NOTE: this doesn't allow tree-shaking
      asClass: false,
      operationId: true,
      methodNameBuilder: (operation) => {
        // Todo: improve this
        // fallback if name is undefined
        // @ts-ignore
        let name: string = operation.name ?? operation.operationId ?? 'unnamedOperation';
        // @ts-ignore
        const service: string = operation.service ?? '';

        if (service && name.toLowerCase().startsWith(service.toLowerCase())) {
          name = name.slice(service.length);
        }

        // Remove invalid characters and convert to camelCase
        name = name
          .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')) // handle hyphens, underscores, spaces
          .replace(/[^a-zA-Z0-9]/g, ''); // remove any remaining invalid characters

        // lowercase first character
        return name.charAt(0).toLowerCase() + name.slice(1);
      },
    },
  ],
});

export default config;
