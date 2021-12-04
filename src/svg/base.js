import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'

const StyledSVG = styled.svg`
  display: block;
  width: ${({ width }) => width || '1.6rem'};
  fill: ${({ theme, color }) => theme.colors[color] || 'currentColor'};
  padding: 0px;
  height: auto;

  ${({ customStyle }) => customStyle && css(customStyle)};

  circle {
    stroke: ${({ theme, color }) => theme.colors[color] || 'currentColor'};
  }
`

StyledSVG.propTypes = {
  width: PropTypes.string,
  customStyle: PropTypes.object,
}

export default StyledSVG
