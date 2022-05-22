import data from 'assets/data'
import { color } from 'assets/styles'
import { List } from 'components/List'
import { Text } from 'components/Text'
import { useUniqueId } from 'hooks/useUniqueId'
import { VFC } from 'react'

import { PerformanceBox, Performance, CompanyBox, Company, Wrapper } from './styles'

export const Career: VFC = () => {
  const workExperience = data.workExperience
  return (
    <Wrapper>
      {workExperience?.map(({ company, date, position, team, description, experiences }) => {
        const uniqueId = useUniqueId()
        return (
          <>
            <CompanyBox key={`company-${uniqueId}`}>
              <Company>
                <Text as='h3' size='subtitle2' weight='bold'>
                  {company}
                </Text>
                <Text as='span' size='subtitle3'>
                  {date}
                </Text>
                <Text as='span' size='subtitle3'>
                  {position}
                </Text>
                <Text as='span' size='subtitle3'>
                  {team}
                </Text>
                <Text size='body2' color={color.gray1}>
                  {description.split('\n').map((text) => {
                    return (
                      <>
                        {text}
                        <br />
                      </>
                    )
                  })}
                </Text>
              </Company>
            </CompanyBox>
            <PerformanceBox key={`performance-${uniqueId}`}>
              {experiences.map(({ title, date: experienceDate, description: experienceDescription, summary }) => {
                const experienceUniqueId = useUniqueId()
                return (
                  <Performance key={experienceUniqueId}>
                    <Text as='h3' weight='bold' size='subtitle2'>
                      {title}
                    </Text>
                    <Text as='span' size='subtitle3'>
                      {experienceDate}
                    </Text>
                    <Text as='p' size='body1'>
                      {experienceDescription.split('\n').map((text) => {
                        return (
                          <>
                            {text}
                            <br />
                          </>
                        )
                      })}
                    </Text>
                    <List>
                      {summary.map((text) => {
                        const summaryUniqueId = useUniqueId()
                        return (
                          <Text key={summaryUniqueId} as='li'>
                            {text}
                          </Text>
                        )
                      })}
                    </List>
                  </Performance>
                )
              })}
            </PerformanceBox>
          </>
        )
      })}
    </Wrapper>
  )
}
