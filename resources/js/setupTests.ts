// resources/js/setupTests.ts
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Extend expect with jest-dom matchers
afterEach(() => {
    cleanup();
});