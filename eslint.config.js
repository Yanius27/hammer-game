import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Игнорируемые директории
  {
    ignores: [
      'dist/',
      'build/',
      'node_modules/',
      'coverage/',
      '.next/',
      'out/',
      '*.config.js',
      '*.config.ts',
    ],
  },

  // Базовые JavaScript правила
  js.configs.recommended,

  // TypeScript правила (рекомендованные)
  ...tseslint.configs.recommended,

  // React конфигурация
  {
    files: ['**/*.{jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // не нужно в React 17+
      'react/prop-types': 'off', // используем TypeScript
    },
  },

  // React Hooks правила
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // Глобальные настройки для всех файлов
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Дополнительные правила для TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Отключаем базовые правила в пользу TypeScript-версий
      'no-unused-vars': 'off',
      'no-undef': 'off',

      // TypeScript специфичные правила
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Prettier (ДОЛЖЕН БЫТЬ ПОСЛЕДНИМ!)
  prettierConfig,
];
