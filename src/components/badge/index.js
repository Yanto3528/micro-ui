import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { Wrapper } from './views'

export const Badge = React.forwardRef(({ children, ...props }, ref) => {
  const theme = useTheme()
  return (
    <Wrapper {...theme.default.component.badge} {...props} ref={ref}>
      {children}
    </Wrapper>
  )
})

Badge.propTypes = {
  /** Children for Tag */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Background color for Tag */
  bg: PropTypes.string,
  /** Text color for Tag */
  color: PropTypes.string,
  /** Padding for Tag */
  padding: PropTypes.string,
  /** Round the Tag border radius */
  rounded: PropTypes.bool,
  /** if not rounded, apply specific radius as Tag border radius */
  radius: PropTypes.string,
  textTransform: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline']),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  customStyle: PropTypes.object,
}

if (isDev) {
  Badge.displayName = 'Tag'
}
