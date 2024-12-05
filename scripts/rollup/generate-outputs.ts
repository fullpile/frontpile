import { OutputOptions } from "rollup";
import { RollupBuild } from "rollup";

export async function generateOutputs(bundle: RollupBuild, outputOptionsList: OutputOptions[]) {
	for (const outputOptions of outputOptionsList) {
		await bundle.write(outputOptions);
	}
  await bundle.close();
}
