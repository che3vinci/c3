// jest.config.ts
import type { Config } from '@jest/types';
const esModules = [
  'zx',
  'globby',
  'globby/node_modules/slash',
  'slash',
  'node-fetch',
  'data-uri-to-buffer',
  'fetch-blob',
  'formdata-polyfill',
  'chalk',
].join('|');
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx|jsx)$': 'ts-jest',
  },
  testRegex: '(\\.(test|spec))\\.(jsx?|tsx?|mjs)$',
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    setupFilesAfterEnv: ['jest-extended'],
  },
  // setupFilesAfterEnv: ['<rootDir>/jestSetupTests.ts'],
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: __dirname,
  // transformIgnorePatterns: [`packages/cli/node_modules/(?!${esModules})`],
  transformIgnorePatterns: [],
};

export default config;
