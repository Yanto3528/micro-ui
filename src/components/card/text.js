import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Text } from './views'

export const CardText = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Text {...theme.default.component.card.text} {...props}>
      {children}
    </Text>
  )
}

CardText.propTypes = {
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  marginBottom: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CardText.displayName = 'CardText'
}
