import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import { actionTypes } from './store/actions'
import { dispatch } from './store'
import {
  AlertWrapper,
  AlertContentContainer,
  AlertTitle,
  AlertBar,
  AlertCloseContainer,
} from './views'

const ToastIcons = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  danger: FaExclamationCircle,
  warning: FaExclamationCircle,
}

export const Alert = ({ toast }) => {
  const { id, title, description, isCloseable, render, status, duration } =
    toast
  const Icon = ToastIcons[status]

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: actionTypes.REMOVE, payload: id })
    }, duration)

    return () => {
      clearTimeout(timer)
    }

    //eslint-disable-next-line
  }, [])

  const onRemoveAlert = () => {
    dispatch({ type: actionTypes.REMOVE, payload: id })
  }

  return render ? (
    <React.Fragment key={toast.id}>{render(toast)}</React.Fragment>
  ) : (
    <AlertWrapper key={id} color={status} data-testid='toaster-alert'>
      <AlertBar bg={status} />
      {Icon && <Icon size='1.5em' />}
      <AlertContentContainer>
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <p>{description}</p>}
      </AlertContentContainer>
      {isCloseable && (
        <AlertCloseContainer onClick={onRemoveAlert} data-testid='alert-close'>
          <AiOutlineClose />
        </AlertCloseContainer>
      )}
    </AlertWrapper>
  )
}

Alert.propTypes = {
  toast: PropTypes.object.isRequired,
}
