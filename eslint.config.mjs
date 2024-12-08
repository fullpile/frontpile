import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginJest from "eslint-plugin-jest";

export default tseslint.config(
  {
    files: [
      "packages/*/*/src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  {
    ignores: [
      "**/*.{mjs,cjs,d.ts,d.mts}",
      "**/dist/**",
      "**/node_modules/**",
      "docs/**",
    ],
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    // eslint-plugin-js
    rules: {
      "array-callback-return": "error",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      curly: "error",
      "default-case": "off",
      "default-case-last": "error",
      "dot-notation": "error",
      "no-alert": "error",
      "no-console": "warn",
      "no-else-return": "error",
      "no-eval": "warn",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unneeded-ternary": "error",
      "no-useless-call": "error",
      "no-useless-constructor": "error",
      "no-useless-return": "error",
      "object-shorthand": "error",
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-object-has-own": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      yoda: "error",
      radix: "error",
      eqeqeq: ["error", "smart"],
      "no-undef": "off",
    },
  },
  {
    files: [
      "scripts/**/*.{ts,tsx}",
    ],
    rules: {
      "no-console": "off",
    },
  },
  {
    // typescript-eslint
    rules: {
      "no-unused-vars": "error",
      "tseslint/no-explicit-any": "off",
      "tseslint/ban-ts-comment": "off",
      "tseslint/no-unused-expressions": "off",
      "tseslint/lines-between-class-members": "off",
      "tseslint/indent": "off",
      "tseslint/naming-convention": "off",
      "tseslint/comma-dangle": "off",
      "tseslint/no-redeclare": "off",
      "tseslint/no-use-before-define": "off",
      "tseslint/no-loop-func": "off",
      "tseslint/no-empty-object-type": "off",
    },
  },
  {
    // eslint-plugin-react
    plugins: {
      pluginReact,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "pluginReact/button-has-type": "error",
      "pluginReact/jsx-boolean-value": "error",
      "pluginReact/jsx-curly-brace-presence": ["error", "never"],
      "pluginReact/jsx-fragments": ["error", "syntax"],
      "pluginReact/jsx-no-comment-textnodes": "error",
      "pluginReact/jsx-no-duplicate-props": "error",
      "pluginReact/jsx-no-target-blank": "error",
      "pluginReact/no-children-prop": "error",
      "pluginReact/no-deprecated": "error",
      "pluginReact/no-find-dom-node": "error",
      "pluginReact/no-string-refs": "error",
      "pluginReact/self-closing-comp": "error",
      "pluginReact/void-dom-elements-no-children": "error",
    },
  },
  {
    // eslint-plugin-jsx-a11y
    plugins: {
      jsxA11y,
    },
    rules: {
      "jsxA11y/no-autofocus": "off",
      "jsxA11y/control-has-associated-label": "off",
      "jsxA11y/mouse-events-have-key-events": "off",
      "jsxA11y/label-has-for": "off",
      "jsxA11y/anchor-is-valid": "off",
      "jsxA11y/label-has-associated-control": "off",
      "jsxA11y/anchor-has-content": "off",
    },
  },
  {
    plugins: {
      pluginJest,
    },
    files: [
      "**/*.test.{ts,tsx}",
    ],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-export': 'off',
      'jest/expect-expect': 'off',
      'jest/valid-title': 'off',
    },
  }
);
