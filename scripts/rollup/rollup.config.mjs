import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import terser from "@rollup/plugin-terser";
import preserveDirectives from "rollup-plugin-preserve-directives";

// const outputOptions = {
//   sourcemap: false,
// };

export default [
  {
    input: "packages/elements/button/src/index.ts",
    output: [
      {
        file: "packages/elements/button/dist/index.cjs",
        format: "cjs",
        // ...outputOptions,
      },
      {
        file: "packages/elements/button/dist/index.js",
        format: "esm",
        // ...outputOptions,
      },
    ],
    external: [/node_modules/],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      preserveDirectives(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/stories/**", "**/tests/**", "./styles.css"],
        outDir: "packages/elements/button/dist",
        rootDir: "packages/elements/button",
        declarationDir: "packages/elements/button/dist",
      }),
      typescriptPaths(),
    ],
  },
  {
    input: "packages/elements/button/dist/src/index.d.ts",
    output: [{ file: "packages/elements/button/dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
