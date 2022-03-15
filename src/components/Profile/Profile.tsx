import data from 'assets/data'
import { Text } from 'components/Text'
import { useUniqueId } from 'hooks/useUniqueId'
import { VFC } from 'react'

import { MyCharacter, ContactBox, HorizontalRule, TextBox, Wrapper, ContactMethod, DefaultInfo } from './styles'

export const Profile: VFC = () => {
  const { name, position, contactMethods, selfIntroduce } = data.introduce
  return (
    <Wrapper>
      <DefaultInfo>
        <TextBox>
          <Text as='h1' size='header2' weight='bold'>
            {name}
          </Text>
          <Text as='h2' size='subtitle1' weight='bold'>
            {position}
          </Text>
          <HorizontalRule />
          <ContactBox>
            {contactMethods.map(({ text, link }) => {
              const uniqueId = useUniqueId()
              return (
                <ContactMethod key={uniqueId} href={link}>
                  <Text as='span' size='subtitle4'>
                    {text}
                  </Text>
                </ContactMethod>
              )
            })}
          </ContactBox>
        </TextBox>
        <MyCharacter src='./character.gif' alt='Memoji 캐릭터' />
      </DefaultInfo>
      {selfIntroduce.split('\n').map((text) => {
        const uniqueId = useUniqueId()
        return (
          <Text key={uniqueId} as='p' size='subtitle4'>
            {text}
          </Text>
        )
      })}
    </Wrapper>
  )
}
