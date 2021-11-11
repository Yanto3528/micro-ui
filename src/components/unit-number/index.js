import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { wrapperPropsData, inputPropsData } from './utils/constant'
import { Separator, Wrapper, StyledInput } from './views'

const MAX_LENGTH = "4"

export const UnitNumber = ({...props }) => {
  const secondPartRef = useRef(null)

  const theme = useTheme()
  const { unitNumber: defaultInputProps } = theme.default.component

  const wrapperProps = getProps(props, defaultInputProps, wrapperPropsData)
  const inputProps = getProps(props, defaultInputProps, inputPropsData)

  const firstPartChange = (e) => {
    if (e.currentTarget.value.length == MAX_LENGTH) {
      secondPartRef.current.focus()
    }
  }

  return (
    <Wrapper
      {...wrapperProps}
    >
      <StyledInput
        {...inputProps}
        {...props}
        maxLength={MAX_LENGTH}
        onChange={firstPartChange}
        {...inputProps}
      />
      <Separator>-</Separator>
      <StyledInput
        {...inputProps}
        {...props}
        ref={secondPartRef}
        maxLength={MAX_LENGTH}
      />
    </Wrapper>
  )
}

UnitNumber.propTypes = {
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
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  /** Give input a full width of the current container */
  fluid: PropTypes.bool,
  placeholder: PropTypes.string,
  /** Text-align for unit number */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
}

if (isDev) {
  UnitNumber.displayName = 'UnitNumber'
}