import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ci-cd-21060122130051-elektro/', // Sesuaikan dengan nama repo GitHub
});
