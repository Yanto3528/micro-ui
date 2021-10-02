import React, { createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '../../constants'
import { useTheme } from '../../hooks'
import { Portal } from '../portal'
import { ModalContent } from './content'
import { ModalHeader } from './header'
import { ModalTitle } from './title'
import { ModalClose } from './close'
import { ModalBody } from './body'
import { ModalActions } from './actions'
import { Wrapper, Overlay } from './views'

const ModalContext = createContext({})

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext should be used within Modal')
  }

  return context
}

export const Modal = ({ children, isOpen, onClose, ...props }) => {
  const theme = useTheme()

  const onStopPropagation = (event) => {
    event.stopPropagation()
  }

  const value = useMemo(() => {
    return { isOpen, onClose }
  }, [isOpen, onClose])

  return isOpen ? (
    <ModalContext.Provider value={value}>
      <Portal>
        <Overlay onClick={onClose}>
          <Wrapper
            onClick={onStopPropagation}
            {...theme.default.component.modal.wrapper}
            {...props}
          >
            {children}{' '}
          </Wrapper>
        </Overlay>
      </Portal>
    </ModalContext.Provider>
  ) : null
}

Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  /** Determined whether the modal is open or not */
  isOpen: PropTypes.bool.isRequired,
  /** a function that runs when you click on the overlay or close icon */
  onClose: PropTypes.func,
}

Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Close = ModalClose
Modal.Body = ModalBody
Modal.Actions = ModalActions

if (isDev) {
  Modal.displayName = 'Modal'
}
