// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
<<<<<<< HEAD
  base: '/',
  publicDir: 'public',
  plugins: [react()],
=======
  publicDir: 'public',

  plugins: [
    react()
  ],

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
<<<<<<< HEAD
=======

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
  build: {
    target: 'es2020',
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
<<<<<<< HEAD
=======

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          const ext = name?.split('.').pop();
          if (ext === 'css') return 'assets/css/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
<<<<<<< HEAD
=======

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/') ||
              id.includes('node_modules/react-is/') ||
              id.includes('node_modules/react-jsx-runtime/')
            ) {
              return 'react-vendor';
            }
<<<<<<< HEAD
=======

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
            if (
              id.includes('node_modules/tailwindcss/') ||
              id.includes('node_modules/postcss/') ||
              id.includes('node_modules/clsx/')
            ) {
              return 'vendor-style';
            }
<<<<<<< HEAD
=======

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
            return 'vendor';
          }
        },
      },
    },
  },
});