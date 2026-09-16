import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ARL_WEBSITE_FRONTEND/',
  plugins: [react()],
});
