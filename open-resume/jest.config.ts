import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
};
export default config;
