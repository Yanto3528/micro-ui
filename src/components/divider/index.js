import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { DividerWrapper } from './views'

export const Divider = (props) => {
  const theme = useTheme()
  return <DividerWrapper {...theme.default.component.divider} {...props} />
}

Divider.propTypes = {
  bg: PropTypes.string,
  margin: PropTypes.string,
}

if (isDev) {
  Divider.displayName = 'Divider'
}
