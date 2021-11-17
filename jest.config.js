module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  testEnvironment: 'jsdom',
}
