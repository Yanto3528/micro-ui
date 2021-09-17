import React from 'react'
import PropTypes from 'prop-types'

import { Colors } from '../../styles'
import { StyledButton, IconContainer, LoadingIcon } from './views'

const Button = ({ icon, disabled, loading, children, bg, textColor, ...otherProps }, ref) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      ref={ref}
      bg={bg || Colors.Primary}
      textColor={textColor || 'white'}
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

Button.propTypes = {
  bg: PropTypes.string,
  textColor: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fluid: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  icon: PropTypes.element,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  customStyle: PropTypes.object,
}

Button.defaultProps = {
  bg: 'Primary',
  textColor: 'white',
  radius: '',
  width: '',
  height: '',
  fluid: false,
  variant: 'solid',
  icon: null,
  type: '',
  rounded: false,
  disabled: false,
  loading: false,
  customStyle: null,
}

export default React.forwardRef(Button)
