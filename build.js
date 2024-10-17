const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { execSync } = require('node:child_process');

const entryPoints = [
  'src/index.ts',
  'src/join-strings.ts',
  'src/keys-to-strings.ts',
  'src/merge-module-strings.ts',
  'src/merge-styles.ts',
];

const shared = {
  bundle: true,
  sourcemap: true,
  target: ['es2015'],
  plugins: [nodeExternalsPlugin()],
};

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

async function build() {
  for (const entryPoint of entryPoints) {
    const name = entryPoint.split('/').pop().replace('.ts', '');
    const camelCaseName = toCamelCase(name);

    // ESM and CJS builds (as before)
    await esbuild.build({
      ...shared,
      entryPoints: [entryPoint],
      outfile: `dist/esm/${name}.js`,
      format: 'esm',
    });

    await esbuild.build({
      ...shared,
      entryPoints: [entryPoint],
      outfile: `dist/${name}.js`,
      format: 'cjs',
    });

    // UMD builds
    const globalName =
      name === 'index'
        ? 'classG'
        : `classG${camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1)}`;

    await esbuild.build({
      ...shared,
      entryPoints: [entryPoint],
      outfile: `dist/umd/${name}.js`,
      format: 'iife',
      globalName: globalName,
      footer: {
        js: `if(typeof module==="object"&&module.exports)module.exports=${globalName};`,
      },
    });

    // Minified UMD builds
    await esbuild.build({
      ...shared,
      entryPoints: [entryPoint],
      outfile: `dist/umd/${name}.min.js`,
      format: 'iife',
      globalName: globalName,
      footer: {
        js: `if(typeof module==="object"&&module.exports)module.exports=${globalName};`,
      },
      minify: true,
    });
  }

  // Generate declaration files
  execSync('tsc -p tsconfig.json --emitDeclarationOnly', { stdio: 'inherit' });
  execSync('tsc -p tsconfig.esm.json --emitDeclarationOnly', {
    stdio: 'inherit',
  });
}

build().catch(() => process.exit(1));
