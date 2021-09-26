import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { StyledButton, IconContainer, LoadingIcon } from './views'

export const Button = React.forwardRef(
  ({ icon, disabled, loading, children, ...otherProps }, ref) => {
    const theme = useTheme()
    return (
      <StyledButton
        disabled={disabled || loading}
        ref={ref}
        {...theme.default.component.button}
        {...otherProps}
      >
        {loading ? (
          <IconContainer>
            <LoadingIcon />
          </IconContainer>
        ) : (
          <>
            {icon && icon}
            {children}
          </>
        )}
      </StyledButton>
    )
  }
)

Button.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  fluid: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  icon: PropTypes.element,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  customStyle: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
}

if (isDev) {
  Button.displayName = 'Button'
}
