import { createContext, useContext } from 'react'

export const ModalContext = createContext()

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext should be used within Modal')
  }

  return context
}
