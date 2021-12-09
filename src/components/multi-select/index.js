import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme, useToggle, useClickOutside } from '@/hooks'
import { getProps, mergeRefs } from '@/utils'

import { Icon } from '../icon'
import { wrapperPropsData } from '../select-option/utils/constants'
import { generateOptions } from '../select-option/utils/helpers'
import {
  Wrapper,
  StyledInput,
  IconContainer,
  StyledOption,
  OptionWrapper,
  SelectedWrapper,
} from './views'

export const MultiSelect = React.forwardRef(
  (
    {
      options,
      filter,
      value,
      onChange,
      searchable,
      readOnly,
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const { multiSelect: defaultSelectProps } = theme.default.component
    const wrapperProps = getProps(props, defaultSelectProps, wrapperPropsData)
    const { selectedOptionProps } = getProps(props, defaultSelectProps, [
      'selectedOptionProps',
    ])
    const iconContainerProps = getProps(props, defaultSelectProps, ['icon'])

    const defaultOptionsRef = useRef(generateOptions(options, filter))
    const inputRef = useRef(null)

    const [isOpen, { onClose, onOpen }] = useToggle(false)
    const clickRef = useClickOutside(onClose)

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
      if (!isOpen) {
        onOpen()
      }
      setInputValue(event.target.value)
    }

    const onSelectItem = (option) => (event) => {
      onChange?.([...value, option], event)
      onClose()
    }

    const onRemoveOption = (selectedName) => {
      if (disabled || readOnly) {
        return
      }

      return (event) => {
        const newValue = value.filter(
          (selectedOption) => selectedOption.name !== selectedName
        )
        onChange?.(newValue, event)
      }
    }

    const handleWrapperClick = () => {
      if (readOnly || disabled) {
        return
      }

      if (!isOpen) {
        onOpen()
      }

      if (searchable && inputRef.current) {
        inputRef.current.focus()
      }
    }

    const handleNoResultClick = (event) => {
      event.stopPropagation()
      onClose()
    }

    const optionValues = Array.isArray(value)
      ? value.map((selectedOption) => selectedOption.value)
      : []
    const displayOptions = defaultOptionsRef.current
      .filter((option) => !optionValues.includes(option.value))
      .filter((option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      )

    return (
      <Wrapper
        {...wrapperProps}
        onClick={handleWrapperClick}
        ref={clickRef}
        disabled={disabled || readOnly}
        data-testid='multi-select-wrapper'
      >
        {Array.isArray(value) &&
          value.map((selectedOption, selectedIndex) => (
            <SelectedWrapper
              key={selectedIndex}
              {...selectedOptionProps}
              data-testid='multi-selected-option'
            >
              <p>{selectedOption?.name}</p>
              <Icon
                name='close'
                size='xs'
                onClick={onRemoveOption(selectedOption.name)}
                data-testid='multi-selected-close'
              />
            </SelectedWrapper>
          ))}
        <StyledInput
          {...defaultSelectProps}
          {...props}
          placeholder={value?.length === 0 ? placeholder : ''}
          ref={mergeRefs(inputRef, ref)}
          value={inputValue}
          onChange={handleInputChange}
          readOnly={readOnly || !searchable}
          disabled={disabled}
          autoComplete='false'
        />
        {iconContainerProps.icon && (
          <IconContainer>{iconContainerProps.icon}</IconContainer>
        )}
        {isOpen && (
          <OptionWrapper data-testid='multi-option-wrapper'>
            {displayOptions.length > 0 ? (
              displayOptions.map((option) => (
                <StyledOption key={option.value} onClick={onSelectItem(option)}>
                  {option.name}
                </StyledOption>
              ))
            ) : (
              <StyledOption onClick={handleNoResultClick}>
                No options found
              </StyledOption>
            )}
          </OptionWrapper>
        )}
      </Wrapper>
    )
  }
)

if (isDev) {
  MultiSelect.displayName = 'MultiSelect'
}

MultiSelect.propTypes = {
  /** Background color for select */
  bg: PropTypes.string,
  /** Text color for select */
  color: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  /** Round the select border radius */
  rounded: PropTypes.bool,
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
  selectedOptionProps: PropTypes.object,
  /** Placeholder for the select */
  placeholder: PropTypes.string,
  /** value for the select, must be an array of object that matches options */
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      name: PropTypes.string,
    })
  ),
  /** Function that gets called when selecting option, parameters passed to this function is
   * onChange(value, event)
   */
  onChange: PropTypes.func,
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
