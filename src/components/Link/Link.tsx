import { FC } from 'react'

import { Wrapper } from './styles'
import { LinkProps } from './type'

export const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <Wrapper href={href} target='_blank'>
      {children}
    </Wrapper>
  )
}
