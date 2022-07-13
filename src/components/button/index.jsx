import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { StyledButton, LoadingIcon, IconContainer } from './views'

export const Button = React.forwardRef(
  (
    { leftIcon, rightIcon, disabled, loading, children, loadingText, ...props },
    ref
  ) => {
    const theme = useTheme()
    return (
      <StyledButton
        {...theme.default.component.button}
        {...props}
        disabled={disabled || loading}
        ref={ref}
      >
        {loading ? (
          <>
            <LoadingIcon data-testid='spinner' /> {loadingText && loadingText}
          </>
        ) : (
          <>
            {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
            {children}
            {rightIcon && <IconContainer>{rightIcon}</IconContainer>}
          </>
        )}
      </StyledButton>
    )
  }
)

Button.propTypes = {
  /** Background color for solid variant, and border-color for outline variant */
  bg: PropTypes.string,
  /** Text color for the button. Only works for solid variant */
  color: PropTypes.string,
  /** Border radius for button */
  radius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  /** If true then it width will be 100% */
  fluid: PropTypes.bool,
  /** Variant for the button */
  variant: PropTypes.oneOf(['solid', 'outline']),
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  /** Determine whether button will be rounded or not. If true then radius won't have any effect */
  rounded: PropTypes.bool,
  /** Disabled the button */
  disabled: PropTypes.bool,
  /** Show loading icon for button and disabled it */
  loading: PropTypes.bool,
  /** Text to show when in loading state */
  loadingText: PropTypes.string,
  customStyle: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
}

if (isDev) {
  Button.displayName = 'Button'
}
