import path from "path";

export function getPackagePath(packageName: string, type: "elements" | "variants" = "elements"): string {
  const packagesPath = getPackagesPath(type);
  return path.join(packagesPath, packageName);
}

export function getPackagesPath(type: "elements" | "variants" = "elements"): string {
  return path.resolve(process.cwd(), "packages", type);
}
