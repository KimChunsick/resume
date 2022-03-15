import { Text } from 'components/Text'
import { FC } from 'react'

import { Wrapper } from './styles'
import { BadgeProps } from './type'

export const Badge: FC<Partial<BadgeProps>> = ({ children, ...otherProps }) => {
  return (
    <Wrapper {...otherProps}>
      <Text as='span' size='body2'>
        {children}
      </Text>
    </Wrapper>
  )
}
