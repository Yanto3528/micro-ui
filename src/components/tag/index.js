import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../../hooks'
import { StyledTag } from './views'

export const Tag = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <StyledTag {...theme.default.component.tag} {...props} ref={ref}>
      {children}
    </StyledTag>
  )
})

Tag.propTypes = {
  /** Children for Tag */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Background color for Tag */
  bg: PropTypes.string,
  /** Text color for Tag */
  color: PropTypes.string,
  /** Padding for Tag */
  padding: PropTypes.string,
  /** Round the Tag border radius */
  uppercase: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  radius: PropTypes.string,
  customStyle: PropTypes.object,
}
