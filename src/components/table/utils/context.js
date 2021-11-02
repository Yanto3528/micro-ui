import { createContext, useContext } from 'react'

export const TableContext = createContext({})

export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableContext should be used within Table')
  }

  return context
}
