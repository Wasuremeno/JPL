/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/resources/js/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/js/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  testMatch: [
    '<rootDir>/resources/js/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/resources/js/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  collectCoverageFrom: [
    'resources/js/**/*.{js,jsx,ts,tsx}',
    '!resources/js/**/*.d.ts',
    '!resources/js/tests/**/*'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};