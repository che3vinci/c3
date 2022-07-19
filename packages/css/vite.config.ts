import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'css',
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      external: [
        /node:*/,
        'tslib',
        'fs-extra',
        'styled-components',
        'polished',
        'react',
        'antd',
        'lodash',
        'copy-to-clipboard',
        '@c3/uikits',
        '@c3/utils-1',
      ],
      plugins: [commonjs(), rollupTypescript()], // `commonjs` plugin include 'required' to single file
    },
  },
});