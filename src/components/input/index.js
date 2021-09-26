import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Wrapper, StyledInput, LeftElement, RightElement } from './views'

export const Input = React.forwardRef(
  ({ leftElement, rightElement, fluid, ...props }, ref) => {
    const theme = useTheme()
    return (
      <Wrapper fluid={fluid}>
        {leftElement && <LeftElement>{leftElement}</LeftElement>}
        <StyledInput
          {...theme.default.component.input}
          {...props}
          fluid={fluid}
          leftElement={!!leftElement}
          rightElement={!!rightElement}
          ref={ref}
        />
        {rightElement && <RightElement>{rightElement}</RightElement>}
      </Wrapper>
    )
  }
)

Input.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the input border radius */
  rounded: PropTypes.bool,
  fontFamily: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the input, only applicable for outline variant */
  focusBorderColor: PropTypes.string,
  hasError: PropTypes.bool,
  leftElement: React.element,
  rightElement: React.element,
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  /** Give input a full width of the current container */
  fluid: PropTypes.bool,
  /** Padding left for when leftElement is specified */
  paddingLeftElement: PropTypes.string,
  /** Padding right for when rightElement is specified */
  paddingRightElement: PropTypes.string,
}

if (isDev) {
  Input.displayName = 'Input'
}
