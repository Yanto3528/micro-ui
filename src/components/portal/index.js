import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const mount = document.createElement('div')
mount.setAttribute('id', 'portal-root')

export const Portal = ({ children }) => {
  useEffect(() => {
    document.body.appendChild(mount)
    return () => {
      document.body.removeChild(mount)
    }
  }, [])

  return createPortal(children, mount)
}
