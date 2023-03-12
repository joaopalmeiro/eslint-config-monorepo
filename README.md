# eslint-config-vue

## Development

```bash
nvm install && nvm use && node --version
```

or

```bash
nvm use && node --version
```

```bash
npm install
```

## References

- https://eslint.org/blog/2022/08/new-config-system-part-2/#using-predefined-configs
- https://eslint.org/docs/latest/use/configure/configuration-files-new
- https://github.com/joaopalmeiro/eslint-config-react
- https://github.com/eslint/eslint/issues/13481
- https://github.com/sxzz/eslint-config + https://www.npmjs.com/package/@sxzz/eslint-config?activeTab=explore
- https://github.com/eslint/eslint/issues/3458#issuecomment-1239811334
- https://github.com/eslint/eslint/issues/15539#issuecomment-1180362963
- https://github.com/jsx-eslint/eslint-plugin-react#configuration-new-eslintconfigjs + https://github.com/jsx-eslint/eslint-plugin-react/blob/master/index.js
- https://github.com/will-stone/dx

## Notes

- `npm install eslint && npm install -D eslint-define-config`
- https://github.com/AlloyTeam/eslint-config-alloy
- https://www.npmjs.com/package/globals
- https://github.com/Shinigami92/eslint-define-config
- [ESLint's new config system, Part 1: Background](https://eslint.org/blog/2022/08/new-config-system-part-1/):
  - Current config system: eslintrc or eslintrc system.
  - New config system: flat config.
  - "(...) we had recommended that shareable configs include any plugins they depended on as peer dependencies rather than regular dependencies. This was a quirk of the way that `extends` was implemented: using `require()`."
- https://www.npmjs.com/package/npm-check-updates:
  - `npx npm-check-updates --packageManager npm` (check) + `npx npm-check-updates -u --packageManager npm` (update)
  - `npx npm-check-updates --help --packageManager`
  - `npx npm-check-updates --packageManager pnpm` + `npx npm-check-updates -u --packageManager pnpm`
