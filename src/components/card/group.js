import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Group } from './views'

export const CardGroup = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Group
      {...theme.default.component.card.group}
      {...props}
      data-testid='card-group'
    >
      {children}
    </Group>
  )
}

CardGroup.propTypes = {
  marginBottom: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  CardGroup.displayName = 'CardGroup'
}
