import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { DividerWrapper, Line, Text } from './views'

const textPropsData = [
  'textPaddingInline',
  'fontFamily',
  'fontWeight',
  'fontSize',
  'color',
]
const wrapperPropsData = ['orientation']

export const Divider = ({ text, ...props }) => {
  const theme = useTheme()
  const { divider: defaultDividerProps } = theme.default.component
  const defaultTextProps = getProps(props, defaultDividerProps, textPropsData)
  const wrapperProps = getProps(props, defaultDividerProps, wrapperPropsData)

  return (
    <DividerWrapper {...wrapperProps}>
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
  /** margin-block for divider
   *
   * (margin top and bottom for horizontal)
   *
   * (margin left and right for vertical)
   * */
  marginBlock: PropTypes.string,
  text: PropTypes.string,
  /** padding-inline for the text to separate the line (left and right for horizontal)
   *
   *  (up and down for vertical)
   * */
  textPaddingInline: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  /** Define the orientation of the divider line */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Custom style for the divider line */
  customStyle: PropTypes.object,
}

if (isDev) {
  Divider.displayName = 'Divider'
}
