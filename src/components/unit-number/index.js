import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps, mergeRefs } from '@/utils'

import { wrapperPropsData, inputPropsData } from './utils/constant'
import { Separator, Wrapper, StyledInput } from './views'

const MAX_LENGTH = 4

export const UnitNumber = ({
  value,
  onChange,
  firstInputRef,
  secondInputRef,
  ...props
}) => {
  const [firstValue, secondValue] = extractValue(value)
  const firstInputValue = useRef(firstValue)
  const secondInputValue = useRef(secondValue)

  const firstPartRef = useRef(null)
  const secondPartRef = useRef(null)

  const theme = useTheme()
  const { unitNumber: defaultInputProps } = theme.default.component

  const wrapperProps = getProps(props, defaultInputProps, wrapperPropsData)
  const inputProps = getProps(props, defaultInputProps, inputPropsData)

  const firstPartChange = (event) => {
    firstInputValue.current = event.currentTarget.value.replace(/[^0-9]+/g, '')

    if (event.currentTarget.value.length === MAX_LENGTH) {
      secondPartRef.current.focus()
    }

    doChange()
  }

  const secondPartChange = (event) => {
    secondInputValue.current = event.currentTarget.value.replace(/[^0-9]+/g, '')

    if (event.currentTarget.value.length === 0) {
      firstPartRef.current.focus()
    }

    doChange()
  }

  const doChange = () => {
    const firstPartValue = firstInputValue.current.toString()
    const secondPartValue = secondInputValue.current.toString()
    const value = firstPartValue + '-' + secondPartValue

    if (!firstInputValue.current && !secondInputValue.current) {
      onChange('')
      return
    }

    onChange(value)
  }

  function extractValue(inputValue) {
    if (inputValue && typeof inputValue !== 'string') {
      throw new Error('value for unit-number must be a string')
    }

    const result = inputValue ? inputValue.split('-') : ['', '']

    return result
  }

  return (
    <Wrapper {...wrapperProps}>
      <StyledInput
        {...inputProps}
        {...props}
        ref={mergeRefs(firstPartRef, firstInputRef)}
        maxLength={MAX_LENGTH}
        onChange={firstPartChange}
      />
      <Separator>-</Separator>
      <StyledInput
        {...inputProps}
        {...props}
        ref={mergeRefs(secondPartRef, secondInputRef)}
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
  /** ref for first input */
  firstInputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /** ref for second input */
  secondInputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

if (isDev) {
  UnitNumber.displayName = 'UnitNumber'
}
