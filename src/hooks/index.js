import { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { ThemeContext } from 'styled-components'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}

export const useToggle = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const onToggle = useCallback(() => setIsOpen((curOpen) => !curOpen), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onOpen = useCallback(() => setIsOpen(true), [])

  return [isOpen, { onToggle, onClose, onOpen }]
}

export const useClickOutside = (callback) => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
    //eslint-disable-next-line
  }, [])

  return ref
}
