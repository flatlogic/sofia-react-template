import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    {
      name: 'source-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (/\/src\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'transform' });
        }
      },
    },
    react({ jsxRuntime: 'classic' }),
  ],
  define: { global: 'globalThis', 'process.env': JSON.stringify({ ...loadEnv(mode, process.cwd(), 'REACT_APP_'), NODE_ENV: mode, PUBLIC_URL: '' }) },
  build: { outDir: 'build' },
}));
