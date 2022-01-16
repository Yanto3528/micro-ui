import React from 'react'
import PropTypes from 'prop-types'
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'

import { Portal } from '../portal'
import { useToast, dispatch } from './store'
import {
  Wrapper,
  AlertWrapper,
  AlertContentContainer,
  AlertTitle,
  AlertBar,
  AlertCloseContainer,
} from './views'
import { actionTypes } from './store/actions'

const ToastIcons = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  error: FaExclamationCircle,
  warning: FaExclamationCircle,
}

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

  const onRemoveAlert = (id) => {
    return () => {
      dispatch({ type: actionTypes.REMOVE, payload: id })
    }
  }

  return (
    <Portal>
      <Wrapper
        {...theme.default.component.toaster}
        {...props}
        data-testid='toaster-container'
      >
        {toasts.map((toast) => {
          const { id, title, description, isCloseable, render, status } = toast
          const Icon = ToastIcons[status]
          return render ? (
            <React.Fragment key={toast.id}>{render(toast)}</React.Fragment>
          ) : (
            <AlertWrapper key={id} color={status}>
              <AlertBar bg={status} />
              {Icon && <Icon size='1.5em' />}
              <AlertContentContainer>
                {title && <AlertTitle>{title}</AlertTitle>}
                {description && <p>{description}</p>}
              </AlertContentContainer>
              {isCloseable && (
                <AlertCloseContainer onClick={onRemoveAlert(id)}>
                  <AiOutlineClose />
                </AlertCloseContainer>
              )}
            </AlertWrapper>
          )
        })}
      </Wrapper>
    </Portal>
  )
}

Toaster.propTypes = {
  customStyle: PropTypes.object,
  /** Determine the status of toast, it affects the color of icon and alert bar */
  status: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
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
