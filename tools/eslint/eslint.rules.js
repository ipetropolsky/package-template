import globals from 'globals';

const restrictedSyntax = [
    {
        selector: 'DebuggerStatement',
        message: 'Do not use debugger',
    },
    {
        selector: "NewExpression[callee.name='Proxy']",
        message: 'Do not use Proxy',
    },
    {
        selector: 'FunctionDeclaration[generator=true]',
        message: 'Do not use generators',
    },
];

export const ignores = ['lib', 'dist', 'build', 'src/build', 'ssr/build', 'e2e', '**/.yarn'];

export const languageOptions = {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: { ...globals.nodeBuiltin },
};

export const cjsLanguageOptions = {
    sourceType: 'commonjs',
    globals: {
        ...globals.node,
        ...globals.commonjs,
    },
};

export const typescriptLanguageOptions = {
    parserOptions: {
        projectService: true,
    },
};

export const commonRules = {
    'array-callback-return': 'error',
    complexity: ['off', 11],
    'consistent-return': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-native-reassign': 'off',
    'no-implicit-coercion': [
        'off',
        {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        },
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': [
        'error',
        {
            allowLoop: false,
            allowSwitch: false,
        },
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
        'off',
        {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        },
    ],
    'no-multi-str': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
        'off',
        {
            props: true,
        },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': [
        'error',
        {
            patterns: ['./*', '../*'],
        },
    ],
    'no-restricted-properties': [
        'error',
        {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            object: 'Reflect',
        },
        {
            object: 'Array',
            property: 'from',
            message: 'Please use spread instead',
        },
    ],
    'no-restricted-syntax': ['error', ...restrictedSyntax],
    'no-return-assign': ['error'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
        'off',
        {
            terms: ['todo', 'fixme', 'xxx'],
            location: 'start',
        },
    ],
    'no-with': 'error',
    radix: 'error',
    'require-await': 'off',
    'vars-on-top': 0,
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',
    'comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
        },
    ],
    'no-await-in-loop': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': [
        'error',
        {
            allow: ['warn', 'error'],
        },
    ],
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error'],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
        'off',
        'all',
        {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
        },
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 0,
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-negated-in-lhs': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': [
        'error',
        {
            requireStringLiterals: true,
        },
    ],
    'callback-return': 'off',
    'global-require': 0,
    'handle-callback-err': 'off',
    'no-mixed-requires': ['off', false],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
    camelcase: [
        'error',
        {
            properties: 'never',
            ignoreDestructuring: true,
            ignoreGlobals: true,
        },
    ],
    'capitalized-comments': [
        'off',
        'never',
        {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        },
    ],
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
        'off',
        'always',
        {
            includeCommonJSModuleExports: false,
        },
    ],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': [
        'error',
        '^[a-zA-Z0-9_$]*$',
        {
            properties: true,
            onlyDeclarations: false,
            ignoreDestructuring: true,
        },
    ],
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    'keyword-spacing': [
        'error',
        {
            overrides: {
                catch: {
                    after: true,
                },
            },
        },
    ],
    'line-comment-position': [
        'off',
        {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': [
        'error',
        {
            before: 'always',
            after: 'always',
        },
    ],
    'max-depth': ['off', 4],
    'max-lines': [
        'off',
        {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': [
        'off',
        {
            max: 1,
        },
    ],
    'multiline-ternary': ['off', 'never'],
    'new-cap': [
        'error',
        {
            capIsNew: false,
            properties: false,
        },
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': [
        0,
        {
            ignoreChainWithDepth: 4,
        },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxBOF: 0,
        },
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
        'error',
        {
            allowForLoopAfterthoughts: true,
        },
    ],
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': [
        0,
        {
            allowAfterThis: false,
        },
    ],
    'no-unneeded-ternary': [
        'error',
        {
            defaultAssignment: false,
        },
    ],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
        'off',
        {
            ObjectExpression: {
                minProperties: 0,
                multiline: true,
            },
            ObjectPattern: {
                minProperties: 0,
                multiline: true,
            },
        },
    ],
    'object-property-newline': [
        'error',
        {
            allowMultiplePropertiesPerLine: true,
        },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': [0, 'never'],
    'require-jsdoc': 'off',
    semi: ['error', 'always'],
    'semi-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'sort-keys': [
        'off',
        'asc',
        {
            caseSensitive: false,
            natural: true,
        },
    ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false,
            overrides: {},
        },
    ],
    'spaced-comment': [
        'error',
        'always',
        {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'],
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'],
                balanced: false,
            },
        },
    ],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 0,
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-use-before-define': [
        'error',
        {
            functions: false,
        },
    ],
    'arrow-body-style': [
        0,
        'as-needed',
        {
            requireReturnForObjectLiteral: false,
        },
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
    'constructor-super': 'error',
    'generator-star-spacing': [
        'error',
        {
            before: false,
            after: true,
        },
    ],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
        'error',
        {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        },
    ],
    'no-var': 'error',
    'object-shorthand': [
        'error',
        'always',
        {
            ignoreConstructors: false,
            avoidQuotes: true,
        },
    ],
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        },
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        },
    ],
    'prefer-destructuring': [
        'off',
        {
            array: true,
            object: true,
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
        'off',
        {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'import/no-unresolved': [
        'error',
        {
            commonjs: true,
            caseSensitive: true,
        },
    ],
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': [
        0,
        {
            devDependencies: [
                'test/**',
                'tests/**',
                'spec/**',
                '**/__tests__/**',
                'test.js',
                'test-*.js',
                '**/*.test.js',
                '**/webpack.config.js',
                '**/webpack.config.*.js',
                '**/rollup.config.js',
                '**/gulpfile.js',
                '**/gulpfile.*.js',
                '**/Gruntfile',
            ],
            optionalDependencies: false,
        },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 0,
    'import/no-nodejs-modules': 'off',
    'import/first': ['error', 'absolute-first'],
    'import/imports-first': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
        'error',
        'always',
        {
            js: 'never',
            mjs: 'never',
            cjs: 'never',
            ts: 'never',
        },
    ],
    'import/order': [
        'off',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
        },
    ],
    'import/newline-after-import': 'error',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': [
        'off',
        {
            max: 10,
        },
    ],
    'import/no-absolute-path': 'error',
    'import/no-internal-modules': 'off',
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'simple-import-sort/imports': [
        'error',
        {
            groups: [
                ['^node:'],
                ['^\\u0000'],
                ['^(?!#src/)(@?\\w)'],
                ['^#src/(?!.*\\.json$)'],
                ['^#src/.*\\.json$'],
                ['^\\.'],
            ],
        },
    ],
    'simple-import-sort/exports': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': [
        'error',
        { allowThen: true, terminationMethod: ['catch', 'asCallback', 'finally'] },
    ],
    'promise/no-return-wrap': ['error', { allowReject: true }],
};

export const javascriptRules = {
    'no-unused-vars': [
        'error',
        {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
};

export const typescriptRules = {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
        'error',
        {
            functions: false,
            classes: false,
        },
    ],
    'no-void': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
        'error',
        {
            selector: ['typeLike', 'enumMember'],
            format: ['PascalCase'],
        },
    ],
    '@typescript-eslint/no-misused-promises': [
        'error',
        {
            checksVoidReturn: false,
        },
    ],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: false }],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-duplicate-type-constituents': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
            allowNumber: true,
        },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            minimumDescriptionLength: 0,
            'ts-check': true,
            'ts-expect-error': 'allow-with-description',
        },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
};

export const eslintConfigRules = {
    'import/extensions': 'off',
};

export const toolScriptRules = {
    'no-console': 'off',
};

// eslint-config-prettier intentionally stays last in the flat config to disable
// rules that conflict with Prettier. A small whitelist is re-enabled after it
// for rules that the maintainers document as workable with Prettier when
// configured carefully:
// https://github.com/prettier/eslint-config-prettier#special-rules
export const prettierCompatibleRules = {
    curly: ['error', 'all'],
    'no-tabs': [
        'error',
        {
            allowIndentationTabs: true,
        },
    ],
    'no-unexpected-multiline': 'error',
};
