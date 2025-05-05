import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Add this line (repo name with slashes)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
