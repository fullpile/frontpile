import path from "path";

export function getPackagePath(packageName: string, type: "elements" | "variants" = "elements"): string {
	return path.resolve(process.cwd(), "packages", type, packageName);
}
