import { rollup } from "rollup";
import { getPackageConfig } from "./get-package-config";
import { generateOutputs } from "./generate-outputs";
import { getPackagePath } from "../utils/get-package-path";
import { generateDts } from "./generate-dts";

export async function bundle(packageName: string, type: "elements" | "variants" = "elements") {
	const { inputOptions, outputOptionsList } = getPackageConfig(packageName, type);
	const packagePath = getPackagePath(packageName, type);

	let buildFailed = false;
	try {
		await using bundle = await rollup(inputOptions);

		console.log(bundle.watchFiles);

		await generateOutputs(bundle, outputOptionsList);
		await generateDts(packageName, type);

	} catch (error) {
		buildFailed = true;
		// do some error reporting
		console.error(error);
	}

	return buildFailed;
}

