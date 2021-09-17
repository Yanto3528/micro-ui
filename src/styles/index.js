import {css} from 'styled-components'
import {ComponentTheme} from '../enums'

export const GlobalFontSize = 16

export const Colors = {
  Primary: '#D31145',
  Secondary: '#424242',
  Dark: '#292825',
  LightGray: '#F2F2F2',
  Gray: '#d8d8d8',
  DarkGray: '#a5a5a6',
  IconForm: '#596C80',
  DarkYellow: '#DBB680',
  LightYellow: '#FAF9F5',
  DarkBgForm: '#E8E8E8',
  Brown: '#695556',
  Error: '#D31145',
  Complete: '#0086C8',
  Approved: '#9DC869',
  DarkBlueGray: '#596C80'
}

export const FontSize = {
  Small: '12px',
  Normal: '14px',
  Modal: '15px',
  Regular: '16px',
  SubText: '18px',
  Large: '20px',
  Title: '22px',
  Larger: '28px',
  Header: '32px',
  Largest: '34px',
}

export const PixelTo = {
  EM: (p) => p/GlobalFontSize + 'em',
  EM_SPACING: (p, fsz) => p/fsz + 'em'
}

export const Default = {
  BorderRadius: '15px',
  ButtonMinWidth: '130px',
  ButtonWidth: '162px',
  InputMinWidth: '220px',
  CalendarMinWidth: '260px',
  ContentMaxWidth: '640px',
  PlanCardWidth: '335px',
  PageMaxWidth: '768px',
  Spacing: '20px',
  GutterVertical: '15px',
  GutterHorizontal: '10px',
  BoxShadow: 'box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);',
  RedShadow: 'box-shadow: 2px 0 10px 0 rgba(170, 8, 54, 0.32)',
  RedGradient: 'linear-gradient(to right, #e84974 0%, #cd4960 52%, #c1375b 100%);',
}

export const absoluteCenter = () => css`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const regularFont = (fontSize) => css`
  font-family: AIARegular;
  font-size: ${fontSize || FontSize.Normal};
  font-weight: lighter;
`

export const boldFont = (fontSize) => css`
  font-family: AIAMedium;
  font-size: ${fontSize || FontSize.Normal};
`

export const condenseMediumFont = (fontSize) => css`
  font-family: AIACondensedMedium;
  font-size: ${fontSize || FontSize.Normal};
`

export const mediumFont = (fontSize) => css`
  font-family: AIAMedium;
  font-size: ${fontSize || FontSize.Normal};
`

export const condenseFont = (fontSize) => css`
  font-family: AIACondensed;
  font-size: ${fontSize || FontSize.Normal};
`

export const inlineBlockMiddle = () => css`
  display: inline-block;
  vertical-align: middle;
`

export const goRounding = () => css`
  border: 0px solid transparent;
  border-radius: 50%;
`

export const extractTheme = (theme) => {
  switch (theme) {
    case ComponentTheme.WhiteRed:
      return css`
        border: 1px solid ${Colors.Primary};
        background-color: transparent;
      `;
    case ComponentTheme.Gray:
      return css`
        border: 1px solid rgb(238, 240, 242);
        background-color: rgb(238, 240, 242);
      `
    case ComponentTheme.WhiteGray:
      return css`
        border: 0px solid white;
        background-color: white;
      `
    case ComponentTheme.Disable:
      return css`
        background-color: transparent;
      `
    default:
      return css`
        border: 1px solid ${Colors.Primary};
        background-color: white;
      `
  }
}