module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFiles: ['core-js', 'regenerator-runtime'],
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/setupTests.js'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
