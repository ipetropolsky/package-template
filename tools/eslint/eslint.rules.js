import globals from 'globals';

const restrictedSyntax = [
    {
        message: 'Do not use debugger',
        selector: 'DebuggerStatement',
    },
    {
        message: 'Do not use Proxy',
        selector: "NewExpression[callee.name='Proxy']",
    },
    {
        message: 'Do not use generators',
        selector: 'FunctionDeclaration[generator=true]',
    },
];

export const ignores = ['lib', 'dist', 'build', 'src/build', 'ssr/build', 'e2e', '**/.yarn'];

export const languageOptions = {
    ecmaVersion: 'latest',
    globals: { ...globals.nodeBuiltin },
    sourceType: 'module',
};

export const cjsLanguageOptions = {
    globals: {
        ...globals.node,
        ...globals.commonjs,
    },
    sourceType: 'commonjs',
};

export const typescriptLanguageOptions = {
    parserOptions: {
        projectService: true,
    },
};

export const commonRules = {
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
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
            after: true,
            before: true,
        },
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
    'callback-return': 'off',
    camelcase: [
        'error',
        {
            ignoreDestructuring: true,
            ignoreGlobals: true,
            properties: 'never',
        },
    ],
    'capitalized-comments': [
        'off',
        'never',
        {
            block: {
                ignoreConsecutiveComments: true,
                ignoreInlineComments: true,
                ignorePattern: '.*',
            },
            line: {
                ignoreConsecutiveComments: true,
                ignoreInlineComments: true,
                ignorePattern: '.*',
            },
        },
    ],
    'comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
        },
    ],
    'comma-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    'comma-style': ['error', 'last'],
    complexity: ['off', 11],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': ['error', 'that', 'self'],
    'constructor-super': 'error',
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
        'off',
        'always',
        {
            includeCommonJSModuleExports: false,
        },
    ],
    'generator-star-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    'global-require': 0,
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': [
        'error',
        '^[a-zA-Z0-9_$]*$',
        {
            ignoreDestructuring: true,
            onlyDeclarations: false,
            properties: true,
        },
    ],
    'import/default': 'off',
    'import/export': 'error',
    'import/extensions': [
        'off',
        'always',
        {
            cjs: 'never',
            js: 'never',
            mjs: 'never',
            ts: 'never',
        },
    ],
    'import/first': ['error', 'absolute-first'],
    'import/imports-first': 'off',
    'import/max-dependencies': [
        'off',
        {
            max: 10,
        },
    ],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 0,
    'import/no-commonjs': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
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
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
        'error',
        {
            caseSensitive: true,
            commonjs: true,
        },
    ],
    'import/no-webpack-loader-syntax': 'off',
    'import/order': [
        'off',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
        },
    ],
    'import/unambiguous': 'off',
    'init-declarations': 'off',
    'key-spacing': [
        'error',
        {
            afterColon: true,
            beforeColon: false,
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
            applyDefaultPatterns: true,
            ignorePattern: '',
            position: 'above',
        },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': [
        'error',
        {
            after: 'always',
            before: 'always',
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
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': [
        'error',
        {
            allow: ['warn', 'error'],
        },
    ],
    'no-const-assign': 'error',
    'no-constant-condition': 'warn',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-else-return': 'error',
    'no-empty': ['error'],
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
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
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': [
        'off',
        {
            allow: [],
            boolean: false,
            number: true,
            string: true,
        },
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
        'error',
        {
            allowLoop: false,
            allowSwitch: false,
        },
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
        'off',
        {
            detectObjects: false,
            enforceConst: true,
            ignore: [],
            ignoreArrayIndexes: true,
        },
    ],
    'no-mixed-requires': ['off', false],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxBOF: 0,
        },
    ],
    'no-native-reassign': 'off',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
        'off',
        {
            props: true,
        },
    ],
    'no-path-concat': 'error',
    'no-plusplus': [
        'error',
        {
            allowForLoopAfterthoughts: true,
        },
    ],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 0,
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': [
        'error',
        {
            patterns: ['./*', '../*'],
        },
    ],
    'no-restricted-modules': 'off',
    'no-restricted-properties': [
        'error',
        {
            message: 'Please use Object.defineProperty instead.',
            property: '__defineGetter__',
        },
        {
            message: 'Please use Object.defineProperty instead.',
            property: '__defineSetter__',
        },
        {
            object: 'Reflect',
        },
        {
            message: 'Please use spread instead',
            object: 'Array',
            property: 'from',
        },
    ],
    'no-restricted-syntax': ['error', ...restrictedSyntax],
    'no-return-assign': ['error'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 0,
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': [
        0,
        {
            allowAfterThis: false,
        },
    ],
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': [
        'error',
        {
            defaultAssignment: false,
        },
    ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-use-before-define': [
        'error',
        {
            functions: false,
        },
    ],
    'no-useless-call': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
        'error',
        {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
        'off',
        {
            location: 'start',
            terms: ['todo', 'fixme', 'xxx'],
        },
    ],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
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
    'object-shorthand': [
        'error',
        'always',
        {
            avoidQuotes: true,
            ignoreConstructors: false,
        },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': [0, 'never'],
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
    'project/import-without-extension': ['error', { extensions: ['js', 'ts'] }],
    'project/json-import-attribute': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': [
        'error',
        { allowThen: true, terminationMethod: ['catch', 'asCallback', 'finally'] },
    ],
    'promise/no-return-wrap': ['error', { allowReject: true }],
    radix: 'error',
    'require-await': 'off',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'always'],
    'semi-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    'sort-imports': [
        'off',
        {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
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
            nonwords: false,
            overrides: {},
            words: true,
        },
    ],
    'spaced-comment': [
        'error',
        'always',
        {
            block: {
                balanced: false,
                exceptions: ['-', '+'],
                markers: ['=', '!'],
            },
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'],
            },
        },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': [
        'error',
        {
            requireStringLiterals: true,
        },
    ],
    'vars-on-top': 0,
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'after'],
    yoda: 'error',
};

export const javascriptRules = {
    'no-unused-vars': [
        'error',
        {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
        },
    ],
};

export const typescriptRules = {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            minimumDescriptionLength: 0,
            'ts-check': true,
            'ts-expect-error': 'allow-with-description',
        },
    ],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/naming-convention': [
        'error',
        {
            format: ['PascalCase'],
            selector: ['typeLike', 'enumMember'],
        },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: false, ignoreVoid: true }],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-promises': [
        'error',
        {
            checksVoidReturn: false,
        },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
        },
    ],
    '@typescript-eslint/no-use-before-define': [
        'error',
        {
            classes: false,
            functions: false,
        },
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
            allowNumber: true,
        },
    ],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    'no-use-before-define': 'off',
    'no-void': 'off',
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
