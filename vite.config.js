import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import vitePrerender from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist/index.html'),
      routes: ['/', '/about', '/business', '/careers', '/contact', '/contents', '/tech', '/detail']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split('.');
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2/.test(extType)) {
            extType = 'css';
          }
          return `static/user/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'static/user/js/[name]-[hash].js',
        entryFileNames: 'static/user/js/[name]-[hash].js'
      }
    }
  }
});
