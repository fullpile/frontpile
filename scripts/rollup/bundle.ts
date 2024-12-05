import { rollup } from "rollup";
import { getPackageConfig } from "./get-package-config";
import { generateOutputs } from "./generate-outputs";

export async function bundle(packageName: string, type: "elements" | "variants" = "elements") {
	const { inputOptions, outputOptionsList, inputOptionsDts, outputOptionsDts } = getPackageConfig(packageName, type);

	let buildFailed = false;
	try {
    // generate the bundle without type declarations
		await using bundle = await rollup(inputOptions);
		console.log(bundle.watchFiles);
		await generateOutputs(bundle, outputOptionsList);

    // generate the type declarations
		await using bundleDts = await rollup(inputOptionsDts);
		console.log(bundleDts.watchFiles);
		await generateOutputs(bundleDts, outputOptionsDts);

	} catch (error) {
		buildFailed = true;
		// do some error reporting
		console.error(error);
	}

	return buildFailed;
}

