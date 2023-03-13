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
- https://github.com/Shinigami92/eslint-define-config
- [ESLint's new config system, Part 1: Background](https://eslint.org/blog/2022/08/new-config-system-part-1/):
  - Current config system: eslintrc or eslintrc system
  - New config system: flat config or flat config system
  - "(...) we had recommended that shareable configs include any plugins they depended on as peer dependencies rather than regular dependencies. This was a quirk of the way that `extends` was implemented: using `require()`."
- https://www.npmjs.com/package/npm-check-updates:
  - `npx npm-check-updates --packageManager npm` (check) + `npx npm-check-updates -u --packageManager npm` (update)
  - `npx npm-check-updates --help --packageManager`
  - `npx npm-check-updates --packageManager pnpm` + `npx npm-check-updates -u --packageManager pnpm`
- [Setting config options for the init command](https://docs.npmjs.com/creating-a-package-json-file#setting-config-options-for-the-init-command):
  - https://github.com/npm/init-package-json/blob/main/lib/default-input.js
  - `npm set init-author-email "jm.palmeiro@campus.fct.unl.pt"`
  - `npm set init-author-name "João Palmeiro"`
  - `npm set init-license "MIT"`
  - `npm set init-version "0.0.0"`
- [ESLint's new config system, Part 2: Introduction to flat config](https://eslint.org/blog/2022/08/new-config-system-part-2/):
  - New configuration file: `eslint.config.js`. It exports an array of config objects.
  - "We used the `overrides` configs as the basis for flat config."
  - https://www.npmjs.com/package/minimatch
  - "A config object only applies to a file if the filename matches a pattern in `files` (or if there is no `files` key, in which case it will match all files)."
  - "Inside of the array, ESLint finds all config objects that match the file being linted and merges them together (...) the merge happens from the top of the array down to the bottom (...) The last matching config always wins when there is a conflict."
  - https://www.npmjs.com/package/globals
  - https://www.npmjs.com/package/@babel/eslint-parser

### Ignore files globally in the flat config system

"With this config, all JavaScript files ending with `.test.js` will be ignored. You can think of this as the equivalent of `ignorePatterns` in eslintrc (...)"

```js
export default [
  {
    ignores: ["**/*.test.js"],
  },
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
    },
  },
];
```
