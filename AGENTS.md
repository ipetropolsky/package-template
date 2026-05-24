# AGENTS

## Environment

- Node.js `24.15.0` via `.nvmrc`
- npm `11.11.0`
- Package format: ESM only (`"type": "module"`)

## Main checks

- `npm run fix-branch`

## Final checks

- `npm run test`
- `npm run build`
- `npm run test:coverage`

## Notes

- Source code lives in `src/`.
- Tests live in `test/`.
- Publish output lives in `dist/`.
- JS utilities live in `tools/` and use ESM by default.
- Internal imports use `#src/*` via `package.json#imports`.
- Relative imports like `./foo` and `../bar` are forbidden.
- `master` is treated as green, so branch work should normally use `npm run fix-branch`.
