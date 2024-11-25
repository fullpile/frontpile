import { bundle } from "./rollup/bundle";


const packageName = process.argv[2];

if (!packageName) {
	console.error("No package name provided");
	process.exit(1);
}

const buildFailed = await bundle(packageName);

process.exit(buildFailed ? 1 : 0);
