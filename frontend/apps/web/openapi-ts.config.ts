import { defineConfig } from '@hey-api/openapi-ts';

// import { methodNameBuilder } from '@/lib/hey-api';

type HeyApiConfig = ReturnType<typeof defineConfig>;

const config: HeyApiConfig = defineConfig({
  input: './openapi.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
  },
  exportSchemas: true, // backend models types
  plugins: [
    // order matters
    {
      name: '@hey-api/typescript',
      enums: 'javascript', // const objects instead of enums
    },
    '@hey-api/schemas', // default json, req.body, '{"username":"abc","password":"123"}'
    {
      name: '@hey-api/sdk',
      asClass: true, // PetService.addPet(), 'true' doesn't allow tree-shaking
    },
    {
      name: '@hey-api/client-next',
      // relative from src/client/ folder
      runtimeConfigPath: '../lib/hey-api.ts', // sets NEXT_PUBLIC_API_URL, auth...
    },
  ],
});

export default config;
