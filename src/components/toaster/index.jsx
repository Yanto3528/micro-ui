import React from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Portal } from '../portal'
import { useToast } from './store'
import { toast } from './toast'
import { Alert } from './alert'
import { Wrapper } from './views'

export const Toaster = (props) => {
  const theme = useTheme()
  const defaultToastOptions = getProps(props, theme.default.component.toaster, [
    'status',
    'duration',
    'position',
    'isCloseable',
    'render',
  ])

  const [{ toasts }] = useToast(defaultToastOptions)

  return (
    <Portal>
      <Wrapper
        {...theme.default.component.toaster}
        {...props}
        data-testid='toaster-container'
      >
        {toasts.map((toast) => (
          <Alert key={toast.id} toast={toast} />
        ))}
      </Wrapper>
    </Portal>
  )
}

Toaster.propTypes = {
  customStyle: PropTypes.object,
  /** Determine the status of toast, it affects the color of icon and alert bar */
  status: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
  /** Determine how long the toast stay before deleting itself */
  duration: PropTypes.number,
  /** Determine the position of the toast */
  position: PropTypes.oneOf([
    'top-left',
    'top',
    'top-right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]),
  /** Show / Hide the close icon */
  isCloseable: PropTypes.bool,
  /** Render custom react element with toast data passed as argument of the function */
  render: PropTypes.func,
}

if (isDev) {
  Toaster.displayName = 'Toaster'
}

export { toast }
