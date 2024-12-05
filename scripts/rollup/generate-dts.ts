import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';
import path from 'path';
import { getPackagePath } from '../utils/get-package-path';
import { generateOutputs } from './generate-outputs';
import { ModuleFormat } from 'rollup';

export async function generateDts(packageName: string, type: "elements" | "variants" = "elements") {
	const packagePath = getPackagePath(packageName, type);

	const inputOptionsTypes = {
		input: path.join(packagePath, "src/index.ts"),
		plugins: [dts()],
		external: [/node_modules/],
		output: [{
			dir: path.join(packagePath, "dist/"),
			format: "esm" as ModuleFormat,
		}]
	};

	try {
		const bundle = await rollup(inputOptionsTypes);
		await generateOutputs(bundle, inputOptionsTypes.output);
		await bundle.close();
	} catch (error) {
		console.error('Error generating type declarations:', error);
		throw error;
	}
}
