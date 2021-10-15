import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Wrapper } from './views'
import { RadioGroupContext } from './utils/context'
import { RadioGroupRadio } from './radio'

export const RadioGroup = React.forwardRef(
  ({ children, value, onChange, name, ...props }, ref) => {
    const theme = useTheme()

    const contextValue = useMemo(() => {
      return { value, name, onChange }
    }, [value, name, onChange])
    return (
      <Wrapper
        {...theme.default.component.radioGroup.wrapper}
        {...props}
        ref={ref}
      >
        <RadioGroupContext.Provider value={contextValue}>
          {children}
        </RadioGroupContext.Provider>
      </Wrapper>
    )
  }
)

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['column', 'row']),
  rowGap: PropTypes.string,
}

if (isDev) {
  RadioGroup.displayName = 'RadioGroup'
}

RadioGroup.Radio = RadioGroupRadio
