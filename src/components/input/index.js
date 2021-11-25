import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Wrapper, StyledInput, LeftElement, RightElement } from './views'

const wrapperPropsData = [
  'color',
  'fluid',
  'width',
  'fontSize',
  'fontFamily',
  'fontWeight',
]

export const Input = React.forwardRef(
  ({ leftElement, rightElement, ...props }, ref) => {
    const theme = useTheme()
    const wrapperProps = getProps(
      props,
      theme.default.component.input,
      wrapperPropsData
    )
    return (
      <Wrapper {...wrapperProps}>
        {leftElement && (
          <LeftElement data-testid='left-element'>{leftElement}</LeftElement>
        )}
        <StyledInput
          {...theme.default.component.input}
          {...props}
          leftElement={!!leftElement}
          rightElement={!!rightElement}
          ref={ref}
        />
        {rightElement && (
          <RightElement data-testid='right-element'>
            {rightElement}
          </RightElement>
        )}
      </Wrapper>
    )
  }
)

Input.propTypes = {
  /** Background color for input */
  bg: PropTypes.string,
  /** Text color for input */
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the input border radius */
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the input, only applicable for outline variant */
  focusBorderColor: PropTypes.string,
  /** Show "danger" color as border color */
  hasError: PropTypes.bool,
  /** Left element for input, for example email icon */
  leftElement: PropTypes.element,
  /** Right element for input, useful for creating password eye */
  rightElement: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
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
