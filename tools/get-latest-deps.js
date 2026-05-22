#!/usr/bin/env node

/**
 * Extracts all dependencies from package.json and outputs
 * a list of package names with @latest suffix for npm install.
 *
 * Usage:
 *   node tools/get-latest-deps.js [--dev|--prod]
 *
 * Options:
 *   --dev    Include devDependencies only
 *   --prod   Include dependencies only
 *   (no flag) Include all dependencies
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const includeDev = !args.includes('--prod');
const includeProd = !args.includes('--dev');

const packageJsonPath = join(import.meta.dirname, '..', 'package.json');

let packageJson;
try {
    const content = readFileSync(packageJsonPath, 'utf8');
    packageJson = JSON.parse(content);
} catch (error) {
    console.error(
        'Error reading package.json:',
        error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
}

const packages = [];

if (includeProd && packageJson.dependencies) {
    packages.push(...Object.keys(packageJson.dependencies));
}

if (includeDev && packageJson.devDependencies) {
    packages.push(...Object.keys(packageJson.devDependencies));
}

if (packages.length === 0) {
    console.log('No dependencies found.');
    process.exit(0);
}

const packagesWithLatest = packages.map((pkg) => `${pkg}@latest`);

console.log(packagesWithLatest.join(' '));
