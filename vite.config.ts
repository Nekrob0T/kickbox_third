import { fileURLToPath, URL } from 'node:url';

import { defineConfig, Plugin } from 'vite';
import { promises as fs } from 'fs';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

function spaFallback(): Plugin {
  return {
    name: 'vite-plugin-spa-fallback',
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const fallbackPath = path.join(distDir, '404.html');

      try {
        const content = await fs.readFile(indexPath, 'utf-8');
        await fs.writeFile(fallbackPath, content);
        console.log('404.html generated for SPA fallback.');
      } catch (err) {
        console.error('Failed to create 404.html:', err);
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/kickbox_third/',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar(),
    spaFallback(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
