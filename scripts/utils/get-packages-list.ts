import fs from "fs";
import path from "path";

type Package = {
	name: string;
	path: string;
	type: "elements" | "variants";
};

/**
 * Gets a list of all packages in the packages directory
 * @param type The type of packages to list ("elements" or "variants")
 * @returns Array of package objects containing name and path
 */
export function getPackagesList(type: "elements" | "variants" = "elements"): Array<Package> {
	const packagesPath = path.resolve(process.cwd(), "packages", type);

	try {
		// Get all directory names in the packages folder
		const packages = fs.readdirSync(packagesPath)
			.filter(file => {
				const stats = fs.statSync(path.join(packagesPath, file));
				return stats.isDirectory();
			})
			.map(packageName => ({
				name: packageName,
				path: path.join(packagesPath, packageName),
				type,
			}));

		return packages;
	} catch (error) {
		console.error(`Error reading packages from ${packagesPath}:`, error);
		return [];
	}
}
