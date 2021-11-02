import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme, useToggle, useClickOutside } from '../../hooks'
import { getProps } from '../../utils'

import { wrapperPropsData } from './utils/constants'
import { normalizeOptionsData, generateOptions } from './utils/helpers'
import {
  Wrapper,
  StyledInput,
  IconContainer,
  StyledOption,
  OptionWrapper,
} from './views'

const initialOptionsValue = (options, filter) =>
  generateOptions(options, filter)

export const Select = React.forwardRef(
  (
    {
      options,
      filter,
      value,
      onChange,
      onBlur,
      searchable,
      readOnly,
      disabled,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const { select: defaultSelectProps } = theme.default.component
    const wrapperProps = getProps(props, defaultSelectProps, wrapperPropsData)
    const iconContainerProps = getProps(props, defaultSelectProps, ['icon'])

    const optionsRef = useRef(normalizeOptionsData(options))
    const defaultOptionsRef = useRef(generateOptions(options, filter))

    const [isOpen, { onClose, onOpen }] = useToggle(false)
    const clickRef = useClickOutside(onClose)

    const [inputValue, setInputValue] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(
      initialOptionsValue(options, filter)
    )

    useEffect(() => {
      const displayValue = optionsRef.current[value]
      if (displayValue) {
        setInputValue(displayValue)
      }
    }, [value])

    const handleInputChange = (event) => {
      setInputValue(event.target.value)
      if (event.target.value === '') {
        return setFilteredOptions(defaultOptionsRef.current)
      }

      const inputValueRegex = new RegExp(event.target.value, 'gi')
      const data = defaultOptionsRef.current.filter((option) => {
        return option.name.match(inputValueRegex)
      })

      setFilteredOptions(data)
    }

    const handleInputBlur = (event) => {
      const { value } = event.target
      let optionValue = optionsRef.current[value]
      if (Array.isArray(options)) {
        optionValue = options.find((option) => option.name === value)?.value
      }

      if (!optionValue) {
        setInputValue('')
      }
      onChange?.(optionValue || '', event)
      setFilteredOptions(defaultOptionsRef.current)
      onBlur?.(event)
    }

    const onSelectItem = (option) => (event) => {
      onChange?.(option.value, event)
      onClose()
    }

    const handleWrapperClick = () => {
      if (readOnly || disabled) {
        return
      }

      if (!isOpen) {
        onOpen()
      }
    }

    return (
      <Wrapper
        {...wrapperProps}
        onClick={handleWrapperClick}
        ref={clickRef}
        disabled={disabled || readOnly}
      >
        <StyledInput
          {...defaultSelectProps}
          {...props}
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          readOnly={readOnly || !searchable}
          disabled={disabled}
        />
        <IconContainer>{iconContainerProps.icon}</IconContainer>
        {isOpen && filteredOptions.length > 0 && (
          <OptionWrapper>
            {filteredOptions.map((option) => (
              <StyledOption key={option.value} onClick={onSelectItem(option)}>
                {option.name}
              </StyledOption>
            ))}
          </OptionWrapper>
        )}
      </Wrapper>
    )
  }
)

if (isDev) {
  Select.displayName = 'Select'
}

Select.propTypes = {
  /** Background color for select */
  bg: PropTypes.string,
  /** Text color for select */
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the select border radius */
  rounded: PropTypes.bool,
  fontFamily: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline']),
  /** Border color for outline variant */
  borderColor: PropTypes.string,
  /** Border color when focusing on the select, only applicable for outline variant */
  focusBorderColor: PropTypes.string,
  /** Show "danger" color as border color */
  hasError: PropTypes.bool,
  /** Give select a full width of the current container */
  fluid: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  /** Custom style for select */
  customStyle: PropTypes.object,
  /** Icon for the select */
  icon: PropTypes.element,
  /** An array to filter out the value (only works when mount for the first time) */
  filter: PropTypes.array,
  /** Placeholder for the select */
  placeholder: PropTypes.string,
  /** value for the select, must match with the value from options */
  value: PropTypes.any,
  /** Function that gets called when selecting option, parameters passed to this function is
   * onChange(value, event)
   */
  onChange: PropTypes.func,
  /** Gets called when blurring in the select */
  onBlur: PropTypes.func,
  /** Determine whether select is searchable or not */
  searchable: PropTypes.bool,
  /** Make this select option read only value */
  readOnly: PropTypes.bool,
  /** Make this select option disabled */
  disabled: PropTypes.bool,
  /** Options for select. supports 3 types of data */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        name: PropTypes.string,
      })
    ),
    PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),
    PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
      step: PropTypes.number,
    }),
  ]).isRequired,
}
