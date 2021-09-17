import { Colors } from '../styles'

export const noop = () => {}

export const resolveColor = (color) => {
  return Colors[color] || color
}
