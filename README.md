# How to install

Please make sure that your react version is 16.8 or above in order to install component-library.

To install component-library, all you need to do is to install component-library and its peer dependencies:

```
npm install component-library styled-components
# or
yarn add component-library styled-components
```

#Usage
To start using the components, please follow these step:

1. Wrap your application with ThemeProvider from styled-components

```jsx
import { ThemeProvider } from 'styled-components'
import { theme } from 'component-library'

function App({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
```

2. Now you can start using your component like this:

```jsx
import { Button } from 'component-library'

function Example() {
  return <Button>Click me</Button>
}
```

# Setting up development

- Clone the repository using `git clone`
- Run `npm install` or `yarn install`
- Run `npm run storybook` or `yarn storybook`

Open http://localhost:6006 to see the storybook

If you want to contribute to this project, you can take a look at [CONTRIBUTING.md](/CONTRIBUTING.md)

# Testing

To run unit-testing

```
# Test
npm run test
# or
yarn test

# Watch test
npm run test:watch
# or
yarn test:watch

# Test coverage
npm run test:coverage
# or
yarn test:coverage
```

# Contributors

Thanks to all these amazing people who contribute to this library:

- Yanto Lee - yanto.lee@aia.com
- Steven Theodore - steven.theodore@aia.com
- Hilal Arsa - hilal.arsa@aia.com
