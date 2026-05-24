import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import promisePlugin from 'eslint-plugin-promise';
import tseslint from 'typescript-eslint';

import {
    cjsLanguageOptions,
    commonRules,
    eslintConfigRules,
    ignores,
    javascriptRules,
    languageOptions,
    prettierCompatibleRules,
    toolScriptRules,
    typescriptLanguageOptions,
    typescriptRules,
} from '#tools/eslint/eslint.rules';
import projectPlugin from '#tools/eslint/project/index';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
    {
        ignores,
    },
    {
        ...js.configs.recommended,
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        ...importPlugin.flatConfigs.recommended,
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        ...importPlugin.flatConfigs.typescript,
        files: ['**/*.ts'],
    },
    {
        ...promisePlugin.configs['flat/recommended'],
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        languageOptions,
        plugins: {
            json,
            perfectionist,
            project: projectPlugin,
        },
        settings: {
            'import/external-module-folders': ['node_modules'],
            'import/parsers': {
                '@typescript-eslint/parser': ['.js', '.mjs', '.cjs', '.ts'],
            },
            'import/resolver': {
                typescript: true,
            },
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: commonRules,
    },
    {
        files: ['**/*.json'],
        ignores: ['**/package-lock.json', '**/package.json'],
        language: 'json/json',
        rules: {
            'json/no-duplicate-keys': 'error',
            'json/no-empty-keys': 'error',
            'json/no-unnormalized-keys': 'error',
            'json/no-unsafe-values': 'error',
            'json/sort-keys': ['error', 'asc', { natural: true }],
            'json/top-level-interop': 'error',
        },
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        rules: javascriptRules,
    },
    {
        files: ['**/*.cjs'],
        languageOptions: cjsLanguageOptions,
    },
    {
        files: ['tools/**/*.{js,mjs,cjs}'],
        rules: toolScriptRules,
    },
    {
        extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        files: ['**/*.ts'],
        languageOptions: {
            ...typescriptLanguageOptions,
            parserOptions: {
                ...typescriptLanguageOptions.parserOptions,
                tsconfigRootDir: currentDir,
            },
        },
        rules: typescriptRules,
    },
    {
        files: ['**/eslint.config.{js,mjs,cjs,ts}', '**/eslint.rules.js'],
        rules: eslintConfigRules,
    },
    eslintConfigPrettier,
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: prettierCompatibleRules,
    }
);
