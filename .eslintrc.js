"use strict";

module.exports = {
  env: {
    node: 1,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["node", "eslint-plugin", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:eslint-plugin/all",
  ],
  rules: {
    "arrow-body-style": "error",
    "no-use-before-define": "error",
    "node/prefer-global/buffer": "error",
    "node/prefer-global/console": "error",
    "node/prefer-global/process": "error",
    "node/prefer-global/text-decoder": "error",
    "node/prefer-global/url": "error",
    "node/prefer-global/url-search-params": "error",
    "eslint-plugin/require-meta-docs-url": [
      "error",
      {
        pattern:
          "https://github.com/qDanik/eslint-plugin-path/blob/main/docs/rules/{{name}}.md",
      },
    ],
    "prettier/prettier": "error",
  },
};
