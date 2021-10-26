import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './views'
import { useTheme } from '../../hooks'

export const Label = React.forwardRef(({ text, ...props }, ref) => {
  const theme = useTheme()
  return (
    <StyledLabel {...theme.default.component.label} {...props} ref={ref}>
      {text}
    </StyledLabel>
  )
})

Label.propTypes = {
  /** Text for label */
  text: PropTypes.string.isRequired,
  /** Background color for label */
  bg: PropTypes.string,
  /** Text color for label */
  color: PropTypes.string,
  /** Padding for label */
  padding: PropTypes.string,
  /** Round the label border radius */
  rounded: PropTypes.bool,
  radius: PropTypes.string,
  className: PropTypes.string,
  customStyle: PropTypes.object,
}
