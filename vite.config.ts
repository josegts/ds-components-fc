// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: ['./src/setup.ts'],
    coverage: {
      provider: 'istanbul',
      functions: 90,
      lines: 90,
      statements: 90,
      branches: 90,
    },
  },
});
