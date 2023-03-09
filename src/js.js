import { GLOB_JS } from "./constants.js";

const js = [
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

export default js;
