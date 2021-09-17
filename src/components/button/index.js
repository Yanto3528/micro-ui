import React from 'react'
import PropTypes from 'prop-types'

import {StyledButton, IconContainer, LoadingIcon} from "./views"

const Button = ({icon, disabled, loading, children, ...otherProps}) => {
  return (
    <StyledButton
      // className={className}
      // type={type}
      // rounded={rounded}
      disabled={disabled || loading}
      // customStyle={customStyle}
      // onClick={onClick}
      // data-test={dataTest}
      {...otherProps}
    >
      {loading ? <IconContainer>
        <LoadingIcon />
      </IconContainer> : (
        <>
          {icon && icon}
          {children}
        </>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  dataTest: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  customStyle: PropTypes.object
}

Button.defaultProps = {
  icon: null,
  onClick: () => {},
  type: '',
  dataTest: '',
  rounded: false,
  disabled: false,
  loading: false,
  customStyle: null
}

export default Button
