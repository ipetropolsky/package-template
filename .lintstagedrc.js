const packageFiles = ['package.json', 'package-lock.json'];
const projectCheckFiles = [
    'tsconfig.json',
    'tsconfig.build.json',
    'eslint.config.*',
    'eslint.rules.*',
    '.lintstagedrc.*',
    'lint-staged.config.*',
    'tools/githooks/pre-commit',
    '.prettierrc.*',
    '.prettierignore',
    'prettier.config.*',
];

const bracePattern = (patterns) => `{${patterns.join(',')}}`;

export default {
    [bracePattern(packageFiles)]: [() => 'npm install'],
    [bracePattern(projectCheckFiles)]: [() => 'npm run check-all'],
    '*.ts': [() => 'npm run ts:check'],
    '*.{ts,js,mjs,cjs}': ['npm run lint:files --', 'npm run format:files --'],
    '!(*.ts|*.js|*.mjs|*.cjs)': ['npm run format:files --'],
};
