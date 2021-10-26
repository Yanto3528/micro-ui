import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { getProps } from '../../utils'
import { wrapperPropsData } from './utils/constant'
import { Wrapper, StyledInput, CountrySelect, Separator } from './views'

export const ContactInput = ({
  onChange,
  supportedCode,
  value,
  disabled,
  readOnly,
  ...props
}) => {
  const inputData = extractValue(value)
  const [countryCode, setCountryCode] = useState(
    value ? inputData.countryCode : supportedCode[0]?.value
  )

  const theme = useTheme()
  const { contactInput: defaultInputProps } = theme.default.component

  const wrapperProps = getProps(props, defaultInputProps, wrapperPropsData)
  const separatorProps = getProps(props, defaultInputProps, ['separatorColor'])

  const handleInputChange = (event) => {
    const formattedValue = event.currentTarget.value.replace(/[^0-9]+/g, '')
    const finalValue = formattedValue ? countryCode + formattedValue : ''

    onChange(finalValue, event)
  }

  const handleCountryCodeChange = (event) => {
    const inputData = extractValue(value)
    const countryCodeValue = event.target.value
    const finalValue = countryCodeValue + inputData.phoneNumber

    setCountryCode(countryCodeValue)
    onChange(finalValue, event)
  }

  function extractValue(inputValue) {
    if (!inputValue) {
      return { countryCode, phoneNumber: '' }
    }

    const countryCodeLength = inputValue.indexOf('+') === 0 ? 3 : 2
    const countryCodeValue = inputValue.substr(0, countryCodeLength)
    const phoneNumber = inputValue.substr(countryCodeLength, inputValue.length)
    const isSupportedCountryCode = supportedCode.some(
      (countryCode) => countryCode.value === countryCodeValue
    )

    if (isSupportedCountryCode) {
      return { countryCode: countryCodeValue, phoneNumber }
    }

    return { countryCode, phoneNumber: '' }
  }

  return (
    <Wrapper {...wrapperProps} disabled={disabled || readOnly}>
      <CountrySelect
        onChange={handleCountryCodeChange}
        disabled={disabled}
        readOnly={readOnly}
      >
        {supportedCode.map((countryCode) => (
          <option key={countryCode.value} value={countryCode.value}>
            {countryCode.name}
          </option>
        ))}
      </CountrySelect>
      <Separator {...separatorProps} />
      <StyledInput
        {...defaultInputProps}
        {...props}
        onChange={handleInputChange}
        value={inputData.phoneNumber || undefined}
        disabled={disabled}
        readOnly={readOnly}
      />
    </Wrapper>
  )
}

ContactInput.propTypes = {
  /** Background color for solid variant, and border-color for outline variant */
  bg: PropTypes.string,
  /** Text color for contact input*/
  color: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  /** Border radius for contact input */
  radius: PropTypes.string,
  /** Round border, if true then radius won't be affected*/
  rounded: PropTypes.bool,
  /** If true, width will be 100% */
  fluid: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the contact input */
  focusBorderColor: PropTypes.string,
  /** Color for the separator, only works on solid variant, in outline variant the color follows the borderColor and focusBorderColor respectively */
  separatorColor: PropTypes.string,
  /** Data to show on select option */
  supportedCode: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  /** will get called when click on either select option or fill in input, will receive 2 props
   * onChange(value, event) where value is the value combined for select option and input,
   * event is the current element that are being clicked on (select / input).
   */
  onChange: PropTypes.func,
  /** value to display for contact input, format must be +658111111 where +65 is the value for select option
   * and 81111111 is the value for input
   */
  value: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  customStyle: PropTypes.object,
}

if (isDev) {
  ContactInput.displayName = 'ContactInput'
}
