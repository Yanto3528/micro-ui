import { createContext, useContext } from 'react'

export const RadioGroupContext = createContext({})

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error(
      'useRadioGroupContext must be used within RadioGroup component'
    )
  }

  return context
}
