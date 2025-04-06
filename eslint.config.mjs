import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends(
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'next'
  ),
  {
    ignores: ['node_modules', '.next', 'dist', 'out'],
  },
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  prettier,
];

export default config;
