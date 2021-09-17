import { keyframes } from 'styled-components'

export default {
  shake: keyframes`
    0% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-7deg);
    }
    90% {
      transform: rotate(7deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `,
  bubble: keyframes`
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.9);
    }
    40% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(0.95);
    }
    80% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  `,
  fadeOut: keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `,
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
  spinning: keyframes`
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  `,
}
