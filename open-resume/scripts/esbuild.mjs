import * as esbuild from 'esbuild';
import { ScssModulesPlugin } from 'esbuild-scss-modules-plugin';

const ctxs = await Promise.all([
  esbuild.context({
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
  }),
  esbuild.context({
    entryPoints: ['scripts/cd/render-pdf.ts'],
    bundle: true,
    outdir: 'build/scripts/cd',
    format: 'cjs',
    platform: 'node',
    external: ['next', 'http-server', 'puppeteer'],
  }),
]);

if (process.argv[2] === '--watch' || process.argv[2] === '-w') {
  console.log('watching...');
  await Promise.all(ctxs.map((ctx) => ctx.watch()));
} else {
  try {
    await Promise.all(ctxs.map((ctx) => ctx.rebuild()));
    process.exit(0);
  } catch (e) {
    process.exit(1);
  }
}
