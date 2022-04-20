import { Text } from 'components/Text'
import { FC } from 'react'

import { HorizontalRule, Wrapper, Content } from './style'
import { SectionProps } from './type'

export const Section: FC<SectionProps> = (props) => {
  const { title, children } = props
  return (
    <Wrapper>
      <Text as='h3' size='subtitle2' weight='bold'>
        {title}
      </Text>
      <HorizontalRule />
      <Content>{children}</Content>
    </Wrapper>
  )
}
