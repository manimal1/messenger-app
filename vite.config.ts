import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  base: '/messenger-app/',
  plugins: [react(), tsconfigPaths(), viteCommonjs()],
  optimizeDeps: {
    include: ['websocket'],
    esbuildOptions: {
      plugins: [esbuildCommonjs(['websocket'])],
    },
  },
});
