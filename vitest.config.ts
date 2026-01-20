import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import { defineConfig as defineViteConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
    ],
    test: {
        environment: 'jsdom',
        setupFiles: ['./resources/js/setupTests.ts'],
        globals: true,
        include: ['resources/js/**/*.{test,spec}.{ts,tsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'resources/js/bootstrap.ts',
                'resources/js/app.tsx',
                'resources/js/ssr.tsx',
            ],
        },
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});