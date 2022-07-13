import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Wrapper } from './views'

export const Grid = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Wrapper
      {...theme.default.component.grid}
      {...props}
      data-testid='grid-container'
    >
      {children}
    </Wrapper>
  )
}

Grid.propTypes = {
  customStyle: PropTypes.object,
}

if (isDev) {
  Grid.displayName = 'Grid'
}
