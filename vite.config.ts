import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
