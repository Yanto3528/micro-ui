import { css } from 'styled-components'

export const checklistStyles = css`
  width: 0.3em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.1em 0.1em 0;
  -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
  -ms-transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
  transform: translate(-50%, -60%) rotate(45deg) scale(0, 0);
`

export const checkedChecklistStyles = css`
  -webkit-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
  -ms-transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
  transform: translate(-50%, -60%) rotate(45deg) scale(1, 1);
`

export const fontStyles = css`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize] || fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`
