import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { isDev } from '@/constants'
import { useTheme } from '@/hooks'
import { getProps } from '@/utils'
import { fadeIn, fadeOut } from '@/animations'

import { Animate } from '../animate'

import { Wrapper, Title, TitleText, Content, ArrowIcon } from './views'

export const Accordion = React.forwardRef(
  (
    {
      children,
      wrapperCustomStyle,
      titleCustomStyle,
      contentCustomStyle,
      title,
      arrowPosition,
      defaultOpen,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const [isExpand, setIsExpand] = useState(defaultOpen)

    const _onExpandClick = (e) => {
      e.stopPropagation()
      setIsExpand(!isExpand)
    }

    return (
      <Wrapper
        ref={ref}
        wrapperCustomStyle={wrapperCustomStyle}
        {...theme.default.component.accordion}
        {...props}
      >
        <Title onClick={_onExpandClick} arrowPosition={arrowPosition}>
          <ArrowIcon isExpand={isExpand} />
          <TitleText titleCustomStyle={titleCustomStyle}>{title}</TitleText>
        </Title>

        <Animate
          show={isExpand}
          onEnter={fadeIn}
          onExit={fadeOut}
          duration={0.5}
        >
          <Content isExpand={isExpand} contentCustomStyle={contentCustomStyle}>
            {children}
          </Content>
        </Animate>
      </Wrapper>
    )
  }
)

Accordion.propTypes = {
  customStyle: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  arrowPosition: PropTypes.oneOf(['left', 'right']),
  wrapperCustomStyle: PropTypes.object,
  titleCustomStyle: PropTypes.object,
  contentCustomStyle: PropTypes.object,
  defaultOpen: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
}

if (isDev) {
  Accordion.displayName = 'Accordion'
}
