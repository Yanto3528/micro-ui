import { createContext, useContext } from 'react'

export const AccordionContext = createContext({})
export const AccordionItemContext = createContext({})

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('useAccordionContext should be used within Accordion')
  }

  return context
}

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error(
      'useAccordionItemContext should be used within AccordionItem'
    )
  }

  return context
}
