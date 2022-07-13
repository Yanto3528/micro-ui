import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { slide, fade } from '@/animations'
import { isDev } from '@/constants'
import { useTheme } from '@/hooks'

import { Portal } from '../portal'
import { Animate } from '../animate'

import { ModalContext } from './utils/context'
import { ModalBody } from './body'
import { ModalHeader } from './header'
import { ModalTitle } from './title'
import { ModalClose } from './close'
import { ModalText } from './text'
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
        <Animate
          show={isOpen}
          onEnter={fade.enter}
          onExit={fade.exit}
          duration={0.5}
        >
          <ModalContext.Provider value={value}>
            <Overlay onClick={onClose} data-testid='modal-overlay'>
              <Animate
                show={isOpen}
                onEnter={slide.enter}
                onExit={slide.exit}
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
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
}

Modal.Body = ModalBody
Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Close = ModalClose
Modal.Text = ModalText
Modal.Actions = ModalActions

if (isDev) {
  Modal.displayName = 'Modal'
}
