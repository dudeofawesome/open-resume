import * as esbuild from 'esbuild';
import { ScssModulesPlugin } from 'esbuild-scss-modules-plugin';

let ctx = await esbuild.context({
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

if (process.argv[2] === '--watch' || process.argv[2] === '-w') {
  console.log('watching...');
  await ctx.watch();
} else {
  await ctx.rebuild();
  process.exit(0);
}
