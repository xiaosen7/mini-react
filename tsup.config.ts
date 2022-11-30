import { defineConfig } from 'tsup';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig(() => ({
  entry: ['src/index.ts'],
  dts: isProd,
  sourcemap: true,
  platform: 'node',
  format: ['esm', 'cjs'],
  minify: isProd,
  watch: isDev,
  silent: true,
  target: 'node16',
  shims: true,
  clean: true,
}));
