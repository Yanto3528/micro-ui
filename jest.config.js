module.exports = {
  displayName: {
    name: 'ReactJS UI Library',
    color: 'redBright'
  },
  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],
  // An array of regexp pattern strings that are matched against all test paths,
  // matched tests are skipped
  testPathIgnorePatterns: [
    '/node_modules/', 
    '/public/'
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },

  // The paths to modules that run some code to configure
  // or set up the testing environment before each test
  setupFiles: ['core-js', 'regenerator-runtime'],

  // A list of paths to modules that run some code to configure
  // or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/setupTests.js'],

  // A map from regular expressions to module names or to arrays of module names
  // that allow to stub out resources with a single module
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'cobertura'
  ],

  // An array of regexp pattern strings,
  // matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [
    'dist'
  ],

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    'jest-junit'
  ],
  
  // This option allows the use of a custom results processor
  testResultsProcessor: 'jest-junit',
}
