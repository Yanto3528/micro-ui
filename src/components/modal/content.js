import PropTypes from 'prop-types'

import { useTheme } from '../../hooks'
import { Content } from './views'

export const Alignment = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

export const ModalContent = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Content {...theme.default.component.modal.content} {...props}>
      {children}
    </Content>
  )
}

ModalContent.propTypes = {
  padding: PropTypes.string,
  /** Alignment of the content, left | center | right */
  alignment: PropTypes.oneOf(Object.keys(Alignment)),
}
