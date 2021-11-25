import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { slideIn, slideOut, fadeIn, fadeOut } from '@/animations'
import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Portal } from '../portal'
import { Animate } from '../animate'

import { ModalContext } from './utils/context'
import { ModalContent } from './content'
import { ModalHeader } from './header'
import { ModalTitle } from './title'
import { ModalClose } from './close'
import { ModalBody } from './body'
import { ModalActions } from './actions'
import { Wrapper, Overlay } from './views'

export const Modal = React.forwardRef(
  ({ children, isOpen, onClose, ...props }, ref) => {
    const theme = useTheme()

    const onStopPropagation = (event) => {
      event.stopPropagation()
    }

    const value = useMemo(() => {
      return { isOpen, onClose }
    }, [isOpen, onClose])

    return (
      <Portal>
        <Animate show={isOpen} onEnter={fadeIn} onExit={fadeOut} duration={0.5}>
          <ModalContext.Provider value={value}>
            <Overlay onClick={onClose} data-testid='modal-overlay'>
              <Animate
                show={isOpen}
                onEnter={slideIn}
                onExit={slideOut}
                duration={0.5}
                data-testid='animate-modal-wrapper'
              >
                <Wrapper
                  onClick={onStopPropagation}
                  {...theme.default.component.modal.wrapper}
                  {...props}
                  ref={ref}
                  data-testid='modal-wrapper'
                >
                  {children}
                </Wrapper>
              </Animate>
            </Overlay>
          </ModalContext.Provider>
        </Animate>
      </Portal>
    )
  }
)

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
