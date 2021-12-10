# Getting Started

The React UI components library based on theme settings are designed to be easy to customize and save a lot of time for new AIA projects.

## Installation

Inside your React project directory, install AIA Digital reactjs ui library by running either of the following:

```bash
# with npm
npm install @aia-digital/reactjs-ui-library styled-components

# with yarn
yarn add @aia-digital/reactjs-ui-library styled-components
```

Please note that [react](https://www.npmjs.com/package/react) >=16.8.0, [react-dom](https://www.npmjs.com/package/react-dom) >=16.8.0, [styled-components](https://www.npmjs.com/package/styled-components) >=5.0.0 and [prop-types](https://www.npmjs.com/package/prop-types) >=15.0.0 are peer dependencies.

## Usage

First, you need to set up the _styled-components_ **ThemeProvider** at the root of your application with the following:

```jsx
import { ThemeProvider } from 'styled-components'
import { theme } from '@aia-digital/reactjs-ui-library'

function App({ Component }) {
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>
}
```

Now you can start using your component like the following:

```jsx
import { Button } from '@aia-digital/component-library'

function Example() {
  return <Button>Click me</Button>
}
```

---

# Setting up development

- Clone the repository using `git clone`
- Run `npm install` or `yarn install`
- Run `npm run storybook` or `yarn storybook`

Open http://localhost:6006 to see the storybook

If you want to contribute to this project, you can take a look at [CONTRIBUTING.md](/CONTRIBUTING.md)

---

# Testing

To run unit-testing

```bash
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

---

# Contributors

Thanks to all these amazing people who contribute to this library:

- Yanto Lee - yanto.lee@aia.com
- Steven Theodore - steven.theodore@aia.com
- Hilal Arsa - hilal.arsa@aia.com
