import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { wrapperPropsData, inputPropsData } from './utils/constant'
import { Separator, Wrapper, StyledInput } from './views'

const MAX_LENGTH = 4

export const UnitNumber = ({ value, onChange, ...props }) => {
  const [firstValue, secondValue] = extractValue(value)
  let firstPartValue = firstValue
  let secondPartValue = secondValue
  const firstPartRef = useRef(null)
  const secondPartRef = useRef(null)

  const theme = useTheme()
  const { unitNumber: defaultInputProps } = theme.default.component

  const wrapperProps = getProps(props, defaultInputProps, wrapperPropsData)
  const inputProps = getProps(props, defaultInputProps, inputPropsData)

  const firstPartChange = (event) => {
    firstPartValue = event.currentTarget.value.replace(/[^0-9]+/g, '')
    
    if (event.currentTarget.value.length === MAX_LENGTH) {
      secondPartRef.current.focus()
    }

    doChange()
  }

  const secondPartChange = (event) => {
    secondPartValue = event.currentTarget.value.replace(/[^0-9]+/g, '')

    if (event.currentTarget.value.length === 0) {
      firstPartRef.current.focus()
    }

    doChange()
  }

  const doChange = () => {
    const value = firstPartValue.toString() + '-' + secondPartValue.toString()

    if (!firstPartValue && !secondPartValue) return onChange(null)

    onChange({value})
  }

  function extractValue(inputValue) {
    let result = ['', '']

    if (typeof inputValue === 'object') {
      const isStringValue = typeof inputValue?.value === 'string' && inputValue.value.includes('-')
      result = isStringValue ? inputValue?.value.split('-') : result
    }
    if (typeof inputValue === 'string') {
      result = inputValue ? inputValue.split('-') : result
    }
    return result;
  }

  return (
    <Wrapper {...wrapperProps}>
      <StyledInput
        {...inputProps}
        {...props}
        ref={firstPartRef}
        maxLength={MAX_LENGTH}
        onChange={firstPartChange}
      />
      <Separator>-</Separator>
      <StyledInput
        {...inputProps}
        {...props}
        ref={secondPartRef}
        maxLength={MAX_LENGTH}
        onChange={secondPartChange}
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
  /** will receive 2 props
   * onChange(value, event) where value is the value combined for first input and second input,
   * event is the current element that are being clicked on (first input / second input).
   */
  onChange: PropTypes.func,
  /** value to display for unit number, example : 1234-5678
   */
  value: PropTypes.string,
}

if (isDev) {
  UnitNumber.displayName = 'UnitNumber'
}