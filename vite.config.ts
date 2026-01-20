import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./resources/js/tests/setup.ts'],
    include: ['resources/js/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'resources/js/tests/setup.ts',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/index.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@': '/resources/js'
    }
  }
});