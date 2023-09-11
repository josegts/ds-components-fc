// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'tsup';
//  --@ts-expect-error test
// import babel from 'esbuild-plugin-babel';

export default defineConfig({
  entry: ['src/components/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: [
    'react',
    'react-dom',
    '@emotion/react',
    '@emotion/styled',
    '@mui/material',
  ],
  esbuildPlugins: [],
});
