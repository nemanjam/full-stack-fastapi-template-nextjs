/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  trailingComma: 'es5',
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '',

    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',

    '<THIRD_PARTY_MODULES>',
    '',

    // workspace, Todo: fails sorting
    '^@workspace/ui',
    '',

    // web
    '^@/lib',
    '^@/components',
    '^@/hooks',
    '^@/app',
    '',

    // possible future aliases
    // '^@/modules',
    // '^@/libs',
    // '^@/utils',
    // '^@/constants',
    // '^@/data',
    // '^@/config',

    // all relative imports
    '^[./]',
    '',

    // types
    '^@/types',
    '<TYPES>',
    '<TYPES>^[.]',
    '',

    // assets and styles
    // Todo: ends with .css, .png, .jpg, etc.
    '^@/assets',
    '^@/styles',
  ],
};
