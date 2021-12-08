import { useState, useCallback } from 'react'

/**
 * Custom hook for toggling between true and false
 * @param {boolean} defaultValue - default value for useToggle
 * @default false
 * @returns {Array} [isOpen, {onOpen, onClose, onToggle}]
 *
 */
export const useToggle = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const onToggle = useCallback(() => setIsOpen((curOpen) => !curOpen), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onOpen = useCallback(() => setIsOpen(true), [])

  return [isOpen, { onToggle, onClose, onOpen }]
}
