import React from 'react'
import { ThemeProvider } from 'styled-components'
import { extendTheme } from '../src'

import '../src/reset.css'

import { addDecorator } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen'

addDecorator(withPropsTable)

const theme = extendTheme({
  default: {
    component: {
      // button: {
      //   bg: 'primary',
      //   rounded: false,
      //   radius: '0px',
      //   padding: '0.5em 1.5em',
      //   variant: 'solid',
      // },
      // input: {
      //   variant: 'outline',
      //   borderColor: 'gray',
      //   fontFamily: 'AIAMedium',
      //   fontSize: '1.6rem',
      //   radius: '4px',
      //   padding: '8px 32px',
      // },
    },
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
