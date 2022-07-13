import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Title } from './views'

export const CardTitle = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Title {...theme.default.component.card.title} {...props}>
      {children}
    </Title>
  )
}

CardTitle.propTypes = {
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CardTitle.displayName = 'CardTitle'
}
