import styled, { css } from 'styled-components'
import { resolveColor, resolveFontFamily } from '../../utils'

const stripedStyles = css`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

const resolveVariant = ({ variant }) => {
  switch (variant) {
    case 'striped':
      return stripedStyles
    default:
      return null
  }
}

export const TableWrapper = styled.table.attrs(() => ({
  className: 'aia-table-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  border: ${({ border }) => border};
  border-spacing: ${({ borderSpacing }) => borderSpacing};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const TableHeaderWrapper = styled.th.attrs(() => ({
  className: 'aia-table-header-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  padding: ${({ padding }) => padding};
  background-color: ${({ theme, bg }) => resolveColor(theme, bg)};
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  border: ${({ border }) => border};
  text-align: ${({ alignment }) => alignment};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const TableRowWrapper = styled.tr.attrs(() => ({
  className: 'aia-table-row-wrapper',
}))`
  ${resolveVariant};
  ${({ customStyle }) => customStyle && css(customStyle)};
`

export const TableDataWrapper = styled.td.attrs(() => ({
  className: 'aia-table-data-wrapper',
}))`
  width: ${({ width, fluid }) => (fluid ? '100%' : width)};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-color: ${({ theme, borderColor }) => resolveColor(theme, borderColor)};
  font-family: ${({ fontFamily }) => resolveFontFamily(fontFamily)};
  font-size: ${({ fontSize }) => fontSize};
  cursor: ${({ cursor }) => cursor};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ alignment }) => alignment};
  ${({ customStyle }) => customStyle && css(customStyle)};
`
