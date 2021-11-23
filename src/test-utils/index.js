import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/components'

const renderWithProvider = (component, options) => {
  const result = render(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
    options
  )

  return {
    ...result,
    rerender: (uiComponent) => {
      result.rerender(
        <ThemeProvider theme={theme}>{uiComponent}</ThemeProvider>
      )
    },
  }
}

export { renderWithProvider as render }
export * from '@testing-library/react'
