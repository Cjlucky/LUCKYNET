import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 3000,
    proxy: {
      // Add proxy for Clerk API if needed
      '/v1': {
        target: 'https://api.clerk.dev',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
