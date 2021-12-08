import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

/**
 * Custom hook for accessing theme object passed to ThemeProvider
 * @returns {Object} Theme object passed to ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
