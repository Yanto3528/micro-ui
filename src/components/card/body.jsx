import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Body } from './views'

export const CardBody = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Body
      {...theme.default.component.card.body}
      {...props}
      data-testid='card-body'
    >
      {children}
    </Body>
  )
}

CardBody.propTypes = {
  padding: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CardBody.displayName = 'CardBody'
}
