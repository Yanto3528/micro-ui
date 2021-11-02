import { useState, useEffect, useRef, useContext } from 'react'
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

  const onToggle = () => setIsOpen((currentOpen) => !currentOpen)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  return [isOpen, { onToggle, onClose, onOpen }]
}

export const useClickOutside = (callback) => {
  const ref = useRef()
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return ref
}
