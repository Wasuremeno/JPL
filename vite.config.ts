import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

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
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    // Vitest Configuration
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./resources/js/test/setup.ts'],
        include: [
            'resources/js/**/*.{test,spec}.{js,jsx,ts,tsx}',
            'resources/js/**/__tests__/**/*.{js,jsx,ts,tsx}',
        ],
        exclude: [
            'node_modules',
            'dist',
            '.idea',
            '.git',
            '.cache',
            'resources/js/ssr.tsx',
        ],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'resources/js/test/setup.ts',
                'resources/js/ssr.tsx',
                '**/*.d.ts',
            ],
        },
        // Match your PHP test naming convention
        testTimeout: 10000,
        hookTimeout: 10000,
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});