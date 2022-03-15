import styled, { css } from 'styled-components'

import { FontSize, ReturningUseText } from './type'

// PC용 폰트 데이터 mapper
const fontMapper: Readonly<Record<FontSize, string>> = {
  header1: 'font-size: 3rem; line-height: 1.5;',
  header2: 'font-size: 2.5rem; line-height: 1.5;',
  subtitle1: 'font-size: 2rem; line-height: 1.5;',
  subtitle2: 'font-size: 1.75rem; line-height: 1.5;',
  subtitle3: 'font-size: 1.5rem; line-height: 1.5;',
  subtitle4: 'font-size: 1.25rem; line-height: 1.5;',
  body1: 'font-size: 1rem; line-height: 1.5;',
  body2: 'font-size: 0.875rem; line-height: 1.5;',
  caption1: 'font-size: 0.75rem; line-height: 1.5;',
  caption2: 'font-size: 0.625rem; line-height: 1.5;'
}

export const Element = styled.p<ReturningUseText>`
  ${({ color, wrap, size, align, weight }) => css`
    white-space: ${wrap ? 'pre-wrap' : 'nowrap'};
    word-break: keep-all;

    ${align &&
    css`
      text-align: ${align};
    `}

    ${weight &&
    css`
      font-weight: ${weight};
    `}

    ${color &&
    css`
      color: ${color};
    `}

    ${fontMapper[size || 'body1']}
  `}
`
