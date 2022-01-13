import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Wrapper } from './views'

export const Flex = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Wrapper
      {...theme.default.component.flex}
      {...props}
      data-testid='flex-container'
    >
      {children}
    </Wrapper>
  )
}

Flex.propTypes = {
  /** align-items property */
  alignItems: PropTypes.string,
  /** justify-content property */
  justify: PropTypes.string,
  gap: PropTypes.string,
  /** flex-wrap property */
  wrap: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Flex.displayName = 'Flex'
}
