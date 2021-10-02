import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'
import { DividerWrapper, Line, Text } from './views'

export const Divider = ({ text, textPadding, ...props }) => {
  const theme = useTheme()
  const defaultTextProps = getProps(props, theme.default.component.divider, [
    'textPadding',
  ])

  const textProps = { padding: textPadding }
  return (
    <DividerWrapper>
      {text ? (
        <>
          <Line {...theme.default.component.divider} {...props} />
          <Text {...defaultTextProps} {...textProps}>
            {text}
          </Text>
          <Line {...theme.default.component.divider} {...props} />
        </>
      ) : (
        <Line {...theme.default.component.divider} {...props} />
      )}
    </DividerWrapper>
  )
}

Divider.propTypes = {
  bg: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string,
  textPadding: PropTypes.string,
}

if (isDev) {
  Divider.displayName = 'Divider'
}
