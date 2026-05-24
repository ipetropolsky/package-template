# package-template

ESM-only шаблон npm-пакета на TypeScript с `tsc`, flat ESLint, Prettier и `lint-staged`.

## Команды

```bash
npm install
npm run build
npm run fix-branch
npm run check-all
npm run fix-all
npm run test
npm run test:coverage
npm run pack:check
```

- `npm install` устанавливает зависимости и через `prepare` ставит `pre-commit` hook.
- `npm run build` очищает `dist/` и собирает ESM + `.d.ts` через `tsc`.
- `npm run fix-branch` запускает `lint-staged --diff=master --relative --no-hide-partially-staged` и используется как основной branch-check относительно эталонного `master`.
- `npm run check-all` прогоняет ts:check, ESLint и Prettier в check-режиме.
- `npm run fix-all` запускает автоисправления ESLint и запись через Prettier.
- `npm run test` запускает `.ts`-тесты через встроенный `node:test` с `tsx`, без промежуточной сборки.
- `npm run test:coverage` запускает те же тесты с coverage-отчётом Node.js.
- `npm run pack:check` делает `npm pack --dry-run` и показывает publish surface пакета.
- `npm run lint:files -- <files...>` запускает ESLint только для переданных файлов с `--fix`.
- `npm run lint:files:check -- <files...>` запускает ESLint только для переданных файлов в check-режиме.
- `npm run format:files -- <files...>` запускает Prettier только для переданных файлов во write-режиме.
- `npm run format:files:check -- <files...>` запускает Prettier только для переданных файлов в check-режиме.

## Структура

- Исходники лежат в `src/`.
- Тесты лежат в `test/`, работают с исходниками.
- На публикацию уходит собранный код из `dist/`.

## Branch flow

`master` считается зелёной веткой. Для обычной работы по ветке основной командой является `npm run fix-branch`: она берёт diff относительно `master` и прогоняет только релевантные задачи из конфигурации `lint-staged`, включая `ts:check`, когда он нужен по изменённым файлам.

## Как запускаются тесты

`node --import tsx --test` означает:

- `node --test` использует встроенный test runner Node.js;
- `--import tsx` подключает `tsx` до старта тестов, чтобы Node мог исполнять `.ts`-файлы из `src/` и `test/` без предварительной сборки.

Почему не только встроенный TS runtime Node.js:

- встроенная поддержка TypeScript в Node рассчитана на lightweight type stripping;
- Node игнорирует `tsconfig.json`, поэтому не покрывает сценарии, завязанные на настройки TS;
- для тестов по исходникам `tsx` даёт более предсказуемый DX и прямо рекомендуется Node docs как путь для “full TypeScript support”.

Coverage запускается через `--experimental-test-coverage`.

## Публикация

```bash
npm run check-all
npm run test
npm run test:coverage
npm run pack:check
npm publish --access public
```

`--access public` нужен для публичной публикации scoped-пакетов. Для unscoped-пакета флаг обычно не обязателен, но явное указание убирает двусмысленность в команде публикации.

`npm publish` реально публикует пакет в npm registry. `npm pack` только собирает локальный tarball из того же publish surface и позволяет проверить состав пакета до публикации.

В шаблоне используется `npm pack --dry-run`, потому что нам нужен именно безопасный предпросмотр содержимого и publish metadata без создания лишнего `.tgz` файла в рабочей директории.

Перед публикацией обнови `name`, `version` и при необходимости metadata в `package.json`.

## Git hooks

Скрипт `prepare` создаёт `.git/hooks/pre-commit` и привязывает его к `npm run lint-staged`.
