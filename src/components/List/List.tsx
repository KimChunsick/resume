import { Text } from 'components/Text'
import { FC } from 'react'

import { Header, UL, Wrapper } from './styles'
import { ListProps } from './type'

export const List: FC<Partial<ListProps>> = ({ title, subtitle, suffix, children }) => {
  return (
    <Wrapper>
      <Header>
        {title && (
          <Text as='span' size='subtitle4' weight='bold'>
            {title}
          </Text>
        )}{' '}
        {suffix}
      </Header>
      {subtitle && (
        <Text as='span' size='body2' weight='bold'>
          {subtitle}
        </Text>
      )}
      <UL>{children}</UL>
    </Wrapper>
  )
}
