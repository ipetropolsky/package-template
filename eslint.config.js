import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
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
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    promisePlugin.configs['flat/recommended'],
    {
        languageOptions,
        plugins: {
            project: projectPlugin,
            'simple-import-sort': simpleImportSortPlugin,
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
        files: ['**/*.ts'],
        extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
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
