import { color } from 'assets/styles'
import styled, { css } from 'styled-components'

import { BadgeProps, BadgeType } from './type'

const BadgeTypeMapper: Readonly<Record<BadgeType, string>> = {
  primary: color.blue1,
  secondary: color.blue2
}

export const Wrapper = styled.span<Partial<BadgeProps>>`
  padding: 2px 6px;
  border-radius: 4px;
  ${({ type }) => css`
    background-color: ${BadgeTypeMapper[type || 'primary']};
  `}
`
