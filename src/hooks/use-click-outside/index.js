import { useEffect, useRef } from 'react'

/**
 * Custom hook for detecting click outside of specific element and run callback function
 * @param {function} callback - function to be called when clicking outside of specified element
 * @returns {Object} Ref used to attach to DOM element
 */
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
