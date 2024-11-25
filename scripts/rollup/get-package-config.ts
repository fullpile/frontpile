import { OutputOptions, rollup, RollupBuild, RollupOptions } from 'rollup';
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import sizes from "rollup-plugin-sizes";
import preserveDirectives from "rollup-plugin-preserve-directives";

import path from "path";
import { getPackagePath } from '../utils/get-package-path';

export function getPackageConfig(packageName: string, type: "elements" | "variants" = "elements") {
	const packagePath = getPackagePath(packageName, type);

	const outputOptionsList: OutputOptions[] = [
		{
			dir: path.join(packagePath, "dist/cjs"),
			entryFileNames: "[name].cjs", 
			format: "cjs",
			sourcemap: true,
			preserveModules: true,
			interop: "auto",
		},
		{
			dir: path.join(packagePath, "dist/esm"),
			entryFileNames: "[name].mjs",
			format: "esm", 
			sourcemap: true,
			preserveModules: true,
		},
	];

	const inputOptions: RollupOptions = {
		input: path.join(packagePath, "src/index.ts"),
		external: [/node_modules/],
		plugins: [
			resolve(),
			commonjs(),
			esbuild({
				sourceMap: true,
				minify: true,
				tsconfig: "./tsconfig.json",
			}),
			preserveDirectives(),
			sizes(),
		],
	};

	return {
		inputOptions,
		outputOptionsList
	};
}
