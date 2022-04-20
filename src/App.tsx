import data from 'assets/data'
import { color } from 'assets/styles'
import { Badge } from 'components/Badge'
import { Blob } from 'components/Blob'
import { Career } from 'components/Career'
import { Link } from 'components/Link'
import { List } from 'components/List'
import { Profile } from 'components/Profile'
import { Section } from 'components/Section'
import { Text } from 'components/Text'
import { useUniqueId } from 'hooks/useUniqueId'
import { VFC } from 'react'
import styled, { keyframes } from 'styled-components'

const badgeLevelMapper: Record<'Major' | 'Minor', 'primary' | 'secondary'> = {
  Major: 'primary',
  Minor: 'secondary'
}

export const App: VFC = () => {
  const { skill, workExperience, awardAndProject, hobby } = data
  return (
    <>
      <BlobWrapper>
        <Blob />
      </BlobWrapper>
      <Container>
        <Profile />
        {skill && (
          <Section title='Skill'>
            {skill.map(({ title, level, descriptions }) => {
              const listUniqueId = useUniqueId()
              return (
                <List key={listUniqueId} title={title} suffix={<Badge type={badgeLevelMapper[level]}>{level}</Badge>}>
                  {descriptions.map((text) => {
                    const textUniqueId = useUniqueId()
                    return (
                      <Text key={textUniqueId} as='li'>
                        {text}
                      </Text>
                    )
                  })}
                </List>
              )
            })}
          </Section>
        )}
        {workExperience && (
          <Section title='Work Experience'>
            <Career />
          </Section>
        )}
        {awardAndProject && (
          <Section title='Award and Project'>
            {awardAndProject.map(({ title, date, descriptions }) => {
              const listUniqueId = useUniqueId()
              return (
                <List key={listUniqueId} title={title} subtitle={date}>
                  {descriptions.map((text) => {
                    const textUniqueId = useUniqueId()
                    return (
                      <Text key={textUniqueId} as='li'>
                        {text}
                      </Text>
                    )
                  })}
                </List>
              )
            })}
          </Section>
        )}
        {hobby && (
          <Section title='Hobby'>
            {hobby.map(({ title, descriptions }) => {
              const listUniqueId = useUniqueId()
              return (
                <List key={listUniqueId} title={title}>
                  {descriptions.map((text) => {
                    const textUniqueId = useUniqueId()
                    return (
                      <Text key={textUniqueId} as='li'>
                        {text}
                      </Text>
                    )
                  })}
                </List>
              )
            })}
          </Section>
        )}
        <footer>
          <Text size='body2' align='center' color={color.gray1}>
            Copyright ⓒ 2022 <Link href='https://kimchunsick.me/'>김춘식</Link> All rights reserved.
          </Text>
        </footer>
      </Container>
    </>
  )
}

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`

const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  padding: 2rem 0;
  margin: auto;

  & ::selection {
    background: ${color.blue2};
  }

  & > header {
    padding-top: 4.5rem;
  }

  & > section {
    gap: 1.5rem;
  }

  & > footer {
    margin-top: 5rem;
  }

  @media screen and (max-width: 1024px) {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    padding: 2rem;
    overflow-x: hidden;
  }

  /* @media print {
    break-before: always;
    * > {
      page-break-inside: avoid;
      break-before: always;
    }
    & > header {
      padding-top: 0;
    }
  } */
`

const BlobWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 50rem;
  height: 50rem;
  pointer-events: none;
  overflow: hidden;

  svg {
    position: relative;
    animation: ${rotate} 60s linear infinite;
  }

  @media screen and (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }

  /* @media print {
    display: none;
  } */
`
