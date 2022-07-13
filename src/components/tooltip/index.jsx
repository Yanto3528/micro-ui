import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { fade } from '@/animations'
import { useToggle, useTheme } from '@/hooks'
import { getProps } from '@/utils'
import { isDev } from '@/constants'
import { Animate } from '../animate'
import { Wrapper, Content, Arrow } from './views'

export const Tooltip = React.forwardRef(
  ({ children, content, hasArrow = true, style, ...props }, ref) => {
    const [isOpen, { onOpen, onClose }] = useToggle()
    const posX = useRef('')

    const theme = useTheme()
    const { tooltip: defaultTooltipProps } = theme.default.component

    const wrapperProps = getProps(props, defaultTooltipProps, [
      'fontFamily',
      'fontSize',
      'fontWeight',
    ])
    const arrowProps = getProps(props, defaultTooltipProps, ['bg'])

    const handleMouseEnter = (event) => {
      onOpen()
      const rect = event.currentTarget.getBoundingClientRect()
      posX.current = `${rect.x}px`
    }

    return (
      <Wrapper
        {...wrapperProps}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onClose}
        ref={ref}
      >
        {children}
        <Animate
          width='100%'
          show={isOpen}
          onEnter={fade.enter}
          onExit={fade.exit}
          duration={0.2}
          data-testid='animate-tooltip-wrapper'
        >
          <Content
            {...defaultTooltipProps}
            {...props}
            posX={posX.current}
            data-testid='tooltip-content'
          >
            {content}
          </Content>
          {hasArrow && <Arrow {...arrowProps} data-testid='tooltip-arrow' />}
        </Animate>
      </Wrapper>
    )
  }
)

Tooltip.propTypes = {
  /** Content for tooltip, can be anything */
  content: PropTypes.any,
  /** Toggle whether the tooltip has the arrow or not */
  hasArrow: PropTypes.bool,
  /** Style for the tooltip wrapper (not the tooltip content) */
  style: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  /** Padding for the tooltip content */
  padding: PropTypes.string,
  /** Width for tooltip content */
  width: PropTypes.string,
  /** Height for tooltip content */
  height: PropTypes.string,
  /** Background-color for tooltip content */
  bg: PropTypes.string,
  /** Text color for tooltip content */
  color: PropTypes.string,
  /** Determine whether tooltip content will be rounded or not. If true then radius won't have any effect */
  rounded: PropTypes.bool,
  /** Border radius for tooltip content */
  radius: PropTypes.string,
  /** Tooltip placement */
  placement: PropTypes.oneOf([
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
  ]),
  /** Custom style for tooltip content */
  customStyle: PropTypes.object,
}

if (isDev) {
  Tooltip.displayName = 'Tooltip'
}
