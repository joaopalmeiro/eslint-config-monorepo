import { GLOB_JS } from "./constants.js";

// https://github.com/sxzz/eslint-config/blob/main/src/js.js
// https://github.com/antfu/eslint-config/tree/main/packages/basic

const javascript = [
  {
    files: [GLOB_JS],
    rules: {
      // https://eslint.org/docs/latest/rules/array-callback-return
      "array-callback-return": [
        "error",
        { allowImplicit: false, checkForEach: true },
      ],
    },
  },
];

export default javascript;
