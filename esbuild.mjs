import * as esbuild from 'esbuild';
import { ScssModulesPlugin } from 'esbuild-scss-modules-plugin';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'build',
  format: 'cjs',
  external: ['react', 'react-dom'],
  plugins: [
    ScssModulesPlugin({
      localsConvention: 'dashes',
      inject: true,
      minify: true,
    }),
  ],
});
