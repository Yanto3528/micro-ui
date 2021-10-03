import { keyframes } from 'styled-components'

export const slideIn = keyframes`
  from {
    transform: translateY(-40px);
  }
  to {
    transform: translateY(0);
  }
`

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-40px);
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const spinning = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const shake = keyframes`
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
`

export const bubble = keyframes`
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
`
