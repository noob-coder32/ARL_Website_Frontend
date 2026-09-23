import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    port: Number(process.env.PORT) || 5173,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
    port: Number(process.env.PORT) || 5173,
  },
});
