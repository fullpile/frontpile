import { getPackagesList } from "./utils/get-packages-list";
import { bundle } from "./rollup/bundle";

async function buildAllPackages() {
  const packages = getPackagesList();

  for (const pkg of packages) {
    console.log(`Starting build for package: ${pkg.name}`);
    try {
      await bundle(pkg.name, pkg.type);
      console.log(`Successfully built package: ${pkg.name}`);
    } catch (error) {
      console.error(`Error building package ${pkg.name}:`, error);
    }
  }
}

// Execute the build
buildAllPackages().catch((error) => {
  console.error("Error building packages:", error);
  process.exit(error ? 1 : 0);
});
