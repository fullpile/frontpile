import { OutputOptions, rollup } from "rollup";
import { getPackageConfig } from "./get-package-config";
import { writeOutputs } from "./write-outputs";

export async function bundle(packageName: string, type: "elements" | "variants" = "elements") {
  const { inputOptions, inputOptionsDts } = getPackageConfig(packageName, type);

  let buildFailed = false;
  try {
    // generate the bundle without type declarations
    await using bundle = await rollup(inputOptions);
    console.log(bundle.watchFiles);
    await writeOutputs(bundle, inputOptions.output as OutputOptions[]);

    // generate the type declarations
    await using bundleDts = await rollup(inputOptionsDts);
    console.log(bundleDts.watchFiles);
    await writeOutputs(bundleDts, inputOptionsDts.output as OutputOptions[]);
  } catch (error) {
    buildFailed = true;
    // do some error reporting
    console.error(error);
  }

  return buildFailed;
}
