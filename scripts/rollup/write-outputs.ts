import { OutputOptions, RollupBuild } from "rollup";

export async function writeOutputs(bundle: RollupBuild, outputOptionsList: OutputOptions[]) {
  for (const outputOptions of outputOptionsList) {
    await bundle.write(outputOptions);
  }
  await bundle.close();
}
