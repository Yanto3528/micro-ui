import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'
import { DividerWrapper, Line, Text } from './views'

const textPropsData = ['textPadding', 'fontFamily', 'fontWeight', 'fontSize']

export const Divider = ({ text, ...props }) => {
  const theme = useTheme()
  const { divider: defaultDividerProps } = theme.default.component
  const defaultTextProps = getProps(props, defaultDividerProps, textPropsData)

  return (
    <DividerWrapper>
      {text ? (
        <>
          <Line {...defaultDividerProps} {...props} />
          <Text {...defaultTextProps}>{text}</Text>
          <Line {...defaultDividerProps} {...props} />
        </>
      ) : (
        <Line {...defaultDividerProps} {...props} />
      )}
    </DividerWrapper>
  )
}

Divider.propTypes = {
  /** Divider line color */
  bg: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string,
  /** Padding for the text to separate the line */
  textPadding: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
}

if (isDev) {
  Divider.displayName = 'Divider'
}
