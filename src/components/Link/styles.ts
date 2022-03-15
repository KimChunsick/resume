import { color } from 'assets/styles'
import styled from 'styled-components'

export const Wrapper = styled.a`
  color: ${color.blue1};
  text-decoration-color: transparent;

  span {
    transition-property: color, text-decoration-color;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &:hover {
    color: ${color.blue2};
    text-decoration-color: ${color.blue2};
  }
`
