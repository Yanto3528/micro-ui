module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/setupTests.js'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  testEnvironment: 'jsdom',
}
