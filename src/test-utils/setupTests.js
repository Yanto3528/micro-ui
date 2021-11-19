import '@testing-library/jest-dom/extend-expect' //eslint-disable-line

beforeAll(() => {
  jest.mock('../constants', () => ({ isDev: false }))
})

beforeEach(() => {
  jest.resetModules()
})
